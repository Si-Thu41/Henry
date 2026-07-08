export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { choice } = req.body;

    const message = `
💌 She reached the final page!

Choice: ${choice}

Time: ${new Date().toLocaleString()}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Telegram API failed");
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}