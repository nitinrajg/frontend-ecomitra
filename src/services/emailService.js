import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendConfirmationEmail = async (toEmail, name) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: 'Thank you for your pre-registration',
      html: `
        <div>
          <h2>Dear ${name},</h2>
          <p>Thank you for pre-registering with EcoMitra!</p>
          <p>We'll get back to you shortly with more information about our partnership program.</p>
          <p>Best regards,</p>
          <p>The EcoMitra Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', toEmail);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

export const sendCareerApplicationEmail = async (toEmail, name, role) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: `Thank you for applying to ${role} position`,
      html: `
        <div>
          <h2>Dear ${name},</h2>
          <p>Thank you for applying to the ${role} position at EcoMitra!</p>
          <p>We've received your application and will review it shortly.</p>
          <p>Our HR team will contact you if your qualifications match our requirements.</p>
          <p>Best regards,</p>
          <p>The EcoMitra Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', toEmail);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};