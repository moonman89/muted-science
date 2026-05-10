import { Resend } from 'resend';
import { logger } from './logger';

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set. Email delivery is unavailable.');
  }
  return new Resend(apiKey);
}

export async function sendPurchaseEmail({
  toEmail,
  toName,
  downloadUrl,
  productName,
}: {
  toEmail: string;
  toName?: string | null;
  downloadUrl: string;
  productName: string;
}): Promise<void> {
  const resend = getResendClient();
  const displayName = toName || toEmail;

  const { error } = await resend.emails.send({
    from: 'Muted Science <noreply@mutedscience.com>',
    to: toEmail,
    subject: `Your download: ${productName}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Download — ${productName}</title>
</head>
<body style="margin:0;padding:0;background:#000;color:#fff;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000;padding:48px 24px;">
    <tr>
      <td>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;margin:0 auto;border:1px solid rgba(255,255,255,0.2);">
          <tr>
            <td style="border-bottom:1px solid rgba(255,255,255,0.2);padding:12px 20px;">
              <p style="margin:0;font-size:9px;text-transform:uppercase;letter-spacing:0.28em;color:rgba(255,255,255,0.4);">MUTED SCIENCE / ORDER CONFIRMED</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 20px 24px;">
              <p style="margin:0 0 8px;font-size:9px;text-transform:uppercase;letter-spacing:0.28em;color:rgba(255,255,255,0.35);">PURCHASE COMPLETE</p>
              <h1 style="margin:0 0 24px;font-size:22px;text-transform:uppercase;letter-spacing:0.1em;color:#fff;">${productName}</h1>
              <p style="margin:0 0 6px;font-size:11px;color:rgba(255,255,255,0.6);line-height:1.7;">Hello${toName ? `, ${toName}` : ''},</p>
              <p style="margin:0 0 24px;font-size:11px;color:rgba(255,255,255,0.6);line-height:1.7;">
                Your purchase is confirmed. Use the link below to download your PDF. The link is private and expires in 7 days.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 20px 32px;">
              <a href="${downloadUrl}"
                 style="display:block;text-align:center;background:#fff;color:#000;text-decoration:none;font-size:10px;text-transform:uppercase;letter-spacing:0.28em;padding:18px 24px;">
                DOWNLOAD ${productName.toUpperCase()} →
              </a>
            </td>
          </tr>
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.1);padding:20px;font-size:8px;text-transform:uppercase;letter-spacing:0.2em;color:rgba(255,255,255,0.25);">
              <p style="margin:0 0 4px;">This link expires in 7 days.</p>
              <p style="margin:0;">If you have trouble downloading, reply to this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  });

  if (error) {
    logger.error({ err: error, toEmail }, 'Failed to send purchase email via Resend');
    throw new Error(`Email send failed: ${error.message}`);
  }

  logger.info({ toEmail }, 'Purchase email sent successfully');
}
