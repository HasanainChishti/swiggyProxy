export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).json({ error: "Missing ?url=" });

  try {
    const response = await fetch(targetUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const data = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}