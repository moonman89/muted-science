import { Router, type IRouter, type Request, type Response } from 'express';
import { z } from 'zod';
import { storage } from '../storage';

const router: IRouter = Router();

const signupSchema = z.object({
  email: z.string().email('Invalid email address.'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to receive marketing emails.' }),
  }),
});

router.post('/email-signup', async (req: Request, res: Response) => {
  const parsed = signupSchema.safeParse(req.body);
  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => i.message).join(' ');
    res.status(400).json({ error: message });
    return;
  }

  const email = parsed.data.email;

  const result = await storage.createEmailSignup(email).catch((err: unknown) => {
    req.log.error({ err, email }, 'Failed to save email signup');
    return undefined;
  });

  // Return success even if already subscribed (idempotent)
  if (!result) {
    res.json({ ok: true, alreadySubscribed: true });
    return;
  }

  req.log.info({ email }, 'New email signup saved');
  res.json({ ok: true, alreadySubscribed: false });
});

export default router;
