import { handleNocoDBWebhook } from "@/src/services/webhookHandler";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await handleNocoDBWebhook(req.body);
    res.status(200).json({ success: true, message: "Webhook processed" });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}