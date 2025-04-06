import { sendCareerApplicationEmail, sendConfirmationEmail } from './emailService.js';

export const handleNocoDBWebhook = async (body) => {
  const { email, name, role } = body;

  if (!email || !name) {
    throw new Error("Missing required fields");
  }

  if (role) {
    await sendCareerApplicationEmail(email, name, role);
  } else {
    await sendConfirmationEmail(email, name);
  }
};