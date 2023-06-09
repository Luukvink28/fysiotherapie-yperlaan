// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { email, name, complaints } = req.body;

  // Create a Nodemailer transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // Set to true if using a secure connection (e.g., with SSL/TLS)
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: 'your-email@example.com',
      to: 'recipient@example.com',
      subject: 'New appointment request',
      text: `
        Name: ${name}
        Email: ${email}
        Complaints: ${complaints}
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
