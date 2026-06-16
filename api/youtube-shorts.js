// Vercel serverless function: GET /api/youtube-shorts
// Returns the channel's latest Shorts as JSON so the homepage can show new
// reels automatically. Cached at the edge so we don't hit YouTube on every hit.
import { fetchShorts } from './_youtube.js';

export default async function handler(_req, res) {
  try {
    const shorts = await fetchShorts({ limit: 8 });
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json({ shorts });
  } catch (err) {
    // Fail soft — the client keeps its built-in fallback list.
    res.status(200).json({ shorts: [], error: String((err && err.message) || err) });
  }
}
