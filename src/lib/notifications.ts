import nodemailer from 'nodemailer';

export async function sendEmailNotification(to: string, subject: string, text: string) {
  // Configure your SMTP transport here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    text,
  });
}

// Placeholder for SMS and in-app notifications
export async function sendSMSNotification(to: string, message: string) {
  // Integrate with Twilio or other SMS provider
  // Example: await twilioClient.messages.create({ to, body: message, from: process.env.TWILIO_FROM });
}

export async function sendInAppNotification(userId: string, message: string) {
  // Save notification to database for in-app delivery
  // Example: await prisma.notification.create({ data: { userId, message } });
}
