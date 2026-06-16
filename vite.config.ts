import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore — plain JS helper shared with the Vercel serverless function
import { fetchShorts } from './api/_youtube.js'

// Dev-only: serve /api/youtube-shorts during `vite dev` (Vercel handles it in prod).
function youtubeShortsDevApi(): Plugin {
  return {
    name: 'youtube-shorts-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/youtube-shorts', async (_req, res) => {
        res.setHeader('Content-Type', 'application/json')
        try {
          const shorts = await fetchShorts({ limit: 8 })
          res.end(JSON.stringify({ shorts }))
        } catch (err) {
          res.end(JSON.stringify({ shorts: [], error: String(err) }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), youtubeShortsDevApi()],
})
