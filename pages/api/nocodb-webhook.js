import { handleNocoDBWebhook } from "@/src/services/webhookHandler";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  if (req.method !== "POST") {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ 
      message: `Method ${req.method} not allowed`,
      allowedMethods: ['POST'] 
    });
  }

  try {
    await handleNocoDBWebhook(req.body);
    res.status(200).json({ success: true, message: "Webhook processed" });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}