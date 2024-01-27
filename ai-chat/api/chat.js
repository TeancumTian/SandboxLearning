// pages/api/chat.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Extract the message from the request body
    const { message } = req.body;

    // Call OpenAI's API (replace with your actual logic to interact with OpenAI)
    const reply = `Response to "${message}"`;

    // Send back the response
    res.status(200).json({ reply });
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
