import { Router, type IRouter, type Request, type Response } from 'express';
import fs from 'fs';
import path from 'path';
import { storage } from '../storage';

const router: IRouter = Router();

router.get('/download/:token', async (req: Request, res: Response) => {
  const { token } = req.params;

  if (!token || typeof token !== 'string') {
    res.status(400).json({ error: 'Invalid download token.' });
    return;
  }

  const purchase = await storage.getPurchaseByToken(token).catch(() => null);

  if (!purchase) {
    res.status(404).json({ error: 'Download link not found.' });
    return;
  }

  if (new Date() > new Date(purchase.tokenExpiresAt)) {
    res.status(410).json({ error: 'This download link has expired. Please contact support.' });
    return;
  }

  const ebookPath = process.env.EBOOK_PATH;
  if (!ebookPath) {
    req.log.error({ token }, 'EBOOK_PATH env var is not set — cannot serve ebook file');
    res.status(503).json({ error: 'File delivery is not yet configured. Please contact support.' });
    return;
  }

  const resolvedPath = path.resolve(ebookPath);
  if (!fs.existsSync(resolvedPath)) {
    req.log.error({ resolvedPath }, 'Ebook file not found at EBOOK_PATH');
    res.status(503).json({ error: 'File delivery is temporarily unavailable. Please contact support.' });
    return;
  }

  await storage.incrementDownloadCount(token).catch((err) => {
    req.log.error({ err, token }, 'Failed to increment download count');
  });

  const filename = `ms-001-pronounced-love.pdf`;
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Cache-Control', 'no-store');

  const stream = fs.createReadStream(resolvedPath);
  stream.pipe(res);
  stream.on('error', (err) => {
    req.log.error({ err, resolvedPath }, 'Error streaming ebook file');
    if (!res.headersSent) {
      res.status(500).json({ error: 'Error delivering file. Please contact support.' });
    }
  });
});

export default router;
