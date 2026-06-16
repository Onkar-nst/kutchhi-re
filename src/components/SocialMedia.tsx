import { useEffect, useState } from "react";
import { Instagram, Youtube, Play } from "lucide-react";
import { motion } from "framer-motion";
import { youtubeShorts, youtubeShortId, youtubeChannelUrl } from "../data";

function ShortPhone({ url, index }: { url: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeShortId(url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      {/* Clean reel card on mobile → phone shell on desktop */}
      <div className="relative rounded-[1.6rem] md:rounded-[2.5rem] bg-black p-0 md:p-2.5 border border-white/10 md:border-black/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
        {/* Notch — desktop phone only */}
        <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
        <div className="relative w-full aspect-[9/16] rounded-[1.6rem] md:rounded-[2rem] overflow-hidden bg-gray-900">
          {playing && id ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
              title={`Kutchhi Caterers Short ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play Short"
              className="absolute inset-0 w-full h-full group"
            >
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt={`Short ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
              {/* Shorts pill */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/55 backdrop-blur-sm rounded-full px-2.5 py-1">
                <Youtube size={13} className="text-white" />
                <span className="text-white text-[10px] font-bold tracking-wide">Shorts</span>
              </div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#FF0000] shadow-xl pl-1 group-hover:scale-110 transition-transform duration-300">
                  <Play size={26} fill="currentColor" strokeWidth={0} />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// How many reels the phone-mockup grid shows.
const SHORTS_SHOWN = 4;

export default function SocialMedia() {
  // Start with the bundled fallback, then swap in the channel's live latest shorts.
  const [shorts, setShorts] = useState<string[]>(youtubeShorts);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/youtube-shorts")
      .then((r) => r.json())
      .then((data: { shorts?: { id: string }[] }) => {
        const ids = (data.shorts || []).map((s) => s.id).filter(Boolean);
        if (!cancelled && ids.length) setShorts(ids);
      })
      .catch(() => {
        /* keep the fallback list */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-4xl overflow-hidden bg-white border border-black/5 p-8 md:p-12 lg:p-16 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 z-10 w-full">
          <p className="text-gray-600 font-medium text-[15px] md:text-[17px] max-w-sm leading-relaxed">
            Catch behind-the-scenes action, amazing events, and delicious dishes right from our kitchen to your feed.
          </p>
          <div className="text-right">
            <h4 className="text-[#e58a43] font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-2">Latest Shorts</h4>
            <h2 className="text-gray-950 font-semibold text-[2.8rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.02em]">
              socials
            </h2>
          </div>
        </div>

        {/* 4 Shorts — compact 2×2 reel grid on mobile, 4 phone mockups on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {shorts.slice(0, SHORTS_SHOWN).map((short, i) => (
            <ShortPhone key={short} url={short} index={i} />
          ))}
        </div>

        {/* Social CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FF0000] text-white px-8 py-4 rounded-full font-bold text-[16px] flex items-center justify-center gap-3 hover:bg-[#cc0000] hover:scale-[1.02] transition-all shadow-lg"
          >
            <Youtube size={22} fill="white" className="text-[#FF0000]" />
            Subscribe on YouTube
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white px-8 py-4 rounded-full font-bold text-[16px] flex items-center justify-center gap-3 hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg"
          >
            <Instagram size={22} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
