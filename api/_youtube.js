// Shared helper: read the latest Shorts/uploads for a YouTube channel from its
// public RSS feed. Runs server-side only (the feed has no CORS headers, so it
// cannot be fetched directly from the browser). Used by both the Vercel
// serverless function (production) and the Vite dev middleware (local dev).

// Channel to pull from. Change the handle here if the channel ever changes —
// the channelId is just a fast-path; if it goes stale we re-resolve from the handle.
export const CHANNEL_HANDLE = 'a-la-cartecaterers9402';
export const CHANNEL_ID = 'UCuZLlIezEpmBabqGIsWQw9Q';

const UA = 'Mozilla/5.0 (compatible; KutchhiCaterersBot/1.0)';

async function fetchText(url, ms = 8000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

// Resolve a channel handle (e.g. "a-la-cartecaterers9402") to a UC… channel id.
export async function resolveChannelId(handle) {
  const html = await fetchText(`https://www.youtube.com/@${handle}`);
  const m =
    html.match(/"channelId":"(UC[\w-]{22})"/) ||
    html.match(/channel\/(UC[\w-]{22})/);
  return m ? m[1] : null;
}

function decodeXml(s = '') {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseFeed(xml, limit) {
  const entries = [];
  const re = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = re.exec(xml)) && entries.length < limit) {
    const block = match[1];
    const id = (block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
    if (!id) continue;
    const title = decodeXml((block.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
    const published = (block.match(/<published>([^<]+)<\/published>/) || [])[1] || '';
    entries.push({ id, title, published, url: `https://www.youtube.com/shorts/${id}` });
  }
  return entries;
}

// Returns the newest uploads (shorts) as [{ id, title, published, url }].
export async function fetchShorts({
  handle = CHANNEL_HANDLE,
  channelId = CHANNEL_ID,
  limit = 8,
} = {}) {
  const feedFor = (cid) =>
    fetchText(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);

  let cid = channelId || (handle ? await resolveChannelId(handle) : null);
  if (!cid) throw new Error('Could not resolve channel id');

  try {
    return parseFeed(await feedFor(cid), limit);
  } catch (err) {
    // channelId may be stale — re-resolve from the handle once and retry.
    if (handle) {
      const fresh = await resolveChannelId(handle);
      if (fresh && fresh !== cid) return parseFeed(await feedFor(fresh), limit);
    }
    throw err;
  }
}
