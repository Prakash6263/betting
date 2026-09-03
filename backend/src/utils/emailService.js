const nodemailer = require('nodemailer');

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

const FROM_NAME = process.env.SMTP_FROM_NAME || 'Myodin Sport';

async function sendOtpEmail({ to, name, otp, purpose }) {
  const config = {
    email_verify: {
      subject: 'Verify your Myodin account',
      intro: name ? `Hi ${name},` : 'Hi there,',
      body: 'Thanks for signing up for Myodin Sport. Please confirm your email address to activate your account.',
    },
    reset_password: {
      subject: 'Reset your Myodin password',
      intro: name ? `Hi ${name},` : 'Hi there,',
      body: 'We received a request to reset your Myodin password. Use the code below to set a new one.',
    },
  };
  const c = config[purpose] || config.email_verify;
  const expiry = process.env.OTP_EXPIRY_MINUTES || '10';

  const transporter = createTransporter();
  const mailOptions = {
    from: `"${FROM_NAME}" <${process.env.SMTP_USER}>`,
    to,
    subject: c.subject,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0f172a; background: #f1f5f9; margin: 0; padding: 24px; }
          .card { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0f172a 0%, #064e3b 100%); color: #fff; padding: 22px 28px; }
          .header h1 { margin: 0; font-size: 20px; }
          .header span { color: #10b981; }
          .content { padding: 28px; }
          .otp { display: inline-block; background: #ecfdf5; color: #065f46; border: 1px dashed #10b981; font-size: 30px; font-weight: 700; letter-spacing: 8px; padding: 12px 20px; border-radius: 10px; margin: 18px 0; }
          .muted { color: #64748b; font-size: 13px; }
          .footer { background: #f8fafc; padding: 14px 28px; color: #94a3b8; font-size: 12px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header"><h1>MYODIN <span>SPORT</span></h1></div>
          <div class="content">
            <p>${c.intro}</p>
            <p>${c.body}</p>
            <div class="otp">${otp}</div>
            <p class="muted">This code is valid for ${expiry} minutes. If you didn't request this, you can safely ignore this email.</p>
          </div>
          <div class="footer">Football intelligence platform &bull; AI-powered match insights</div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendOtpEmail };
