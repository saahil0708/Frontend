import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendConfirmationEmail = async (userEmail, userName, abstractTitle) => {
  const mailOptions = {
    from: `"Swami Vivekanand College for Pharmacy" <${process.env.SMTP_MAIL}>`,
    to: userEmail,
    subject: 'Registration & Abstract Submission Confirmed - International Conference on AI & Pharmacy 2026',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #005245; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Registration Confirmed!</h1>
        </div>
        <div style="padding: 40px; color: #1e293b; line-height: 1.6;">
          <p style="font-size: 18px; margin-top: 0;">Dear <strong>${userName}</strong>,</p>
          <p>Thank you for registering for the <strong>International Conference on AI & Pharmacy 2026</strong>. We are pleased to confirm that your research abstract has been successfully submitted.</p>
          
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <p style="margin: 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Abstract Title</p>
            <p style="margin: 5px 0 0 0; font-size: 16px; color: #0f172a;">${abstractTitle}</p>
          </div>

          <p>Our review committee will evaluate your submission, and we will get back to you with the results shortly.</p>
          
          <p style="margin-bottom: 0;">Best Regards,<br><strong>Event Organizing Team</strong><br>International Conference on AI & Pharmacy 2026</p>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
          <p style="margin: 0;">&copy; 2026 International Conference on AI & Pharmacy. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
