import express from 'express';
import { sendConfirmationEmail } from './emailService.js';

const router = express.Router();

router.post('/nocodb-webhook', async (req, res) => {
  try {
    const { email, name, role } = req.body;
    
    if (!email || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (role) {
      await sendCareerApplicationEmail(email, name, role);
    } else {
      await sendConfirmationEmail(email, name);
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;