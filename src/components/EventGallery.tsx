import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryData } from "../data";

type TabKey = "wedding" | "sangeet" | "corporate";
const TABS: TabKey[] = ["corporate", "wedding", "sangeet"];

// Photo grid is capped to 2 rows (4 cols × 2). The last visible tile reveals the rest.
const MAX_VISIBLE = 8;

// Splits a stat like "500+", "50k+", "5★", "24/7" or "∞" into an animatable
// number plus its prefix/suffix. Non-numeric values (e.g. "∞") render as-is.
function parseStat(value: string) {
  const m = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  if (!m) return { prefix: "", target: null as number | null, suffix: value };
  return { prefix: m[1], target: parseInt(m[2].replace(/,/g, ""), 10), suffix: m[3] };
}

// Counts the number up from 0 when it scrolls into view (re-runs on tab switch
// because the parent panel remounts). Keeps prefix/suffix intact.
function CountUpStat({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { prefix, target, suffix } = parseStat(value);
  const [display, setDisplay] = useState(target === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v).toLocaleString()}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default function EventGallery({ defaultTab }: { defaultTab?: string }) {
  const initial: TabKey = TABS.includes(defaultTab as TabKey) ? (defaultTab as TabKey) : TABS[0];
  const [active, setActive] = useState<TabKey>(initial);
  const data = galleryData[active];

  // Lightbox: index of the photo open in fullscreen (null = closed).
  const [lightbox, setLightbox] = useState<number | null>(null);
  const photos = data.photos;
  const isOpen = lightbox !== null;

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );

  // Close the viewer when switching tabs so the index never points at a stale list.
  useEffect(() => {
    setLightbox(null);
  }, [active]);

  // Keyboard navigation + lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-10">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-[14px] md:text-[15px] transition-all ${
                active === tab
                  ? "bg-[#e58a43] text-white shadow-lg shadow-[#e58a43]/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-950"
              }`}
            >
              {galleryData[tab].label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-7 md:gap-9"
          >
            {/* Title + concise description + slim stats */}
            <div className="flex flex-col gap-3 max-w-[760px] px-1">
              <h3 className="text-gray-950 font-semibold text-[2rem] md:text-[2.8rem] leading-tight tracking-[-0.02em]">
                {data.title}
              </h3>
              <p className="text-gray-600 text-[15px] md:text-[18px] font-medium leading-relaxed">
                {data.description}
              </p>
              <p className="text-gray-500 text-[14px] md:text-[16px] font-medium leading-relaxed">
                {data.detail}
              </p>
              <div className="flex flex-wrap gap-x-14 md:gap-x-24 gap-y-8 mt-8 pt-8 border-t border-gray-200/70">
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-2.5">
                    <CountUpStat
                      value={stat.value}
                      className="text-gray-950 font-semibold text-[2.8rem] md:text-[3.8rem] leading-none tracking-[-0.02em] tabular-nums"
                    />
                    <span className="text-gray-400 text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.12em]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean uniform photo grid — capped to 2 rows; last tile reveals the rest */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
              {photos.slice(0, MAX_VISIBLE).map((photo, i) => {
                const isOverflowTile = photos.length > MAX_VISIBLE && i === MAX_VISIBLE - 1;
                const remaining = photos.length - MAX_VISIBLE;
                return (
                  <motion.button
                    type="button"
                    onClick={() => setLightbox(i)}
                    key={photo.src + i}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.04 }}
                    className="relative aspect-square rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden group bg-gray-100 cursor-pointer text-left"
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {isOverflowTile ? (
                      /* Last visible tile — dimmed overlay with "+N more" */
                      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/75 transition-colors flex flex-col items-center justify-center text-white">
                        <span className="font-bold text-[2rem] md:text-[2.75rem] leading-none tracking-tight">+{remaining}</span>
                        <span className="text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.15em] mt-1.5 text-white/80">More Photos</span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-[12px] md:text-[13px] font-semibold leading-snug opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {photo.caption}
                        </p>
                      </>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Fullscreen lightbox ─── */}
      <AnimatePresence>
        {isOpen && lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
            onClick={close}
          >
            {/* Top bar: counter + close */}
            <div className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6 shrink-0">
              <span className="text-white/70 font-medium text-[15px] md:text-[17px] tabular-nums tracking-wide">
                {lightbox + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); close(); }}
                aria-label="Close"
                className="text-white/80 hover:text-white hover:rotate-90 transition-all duration-300"
              >
                <X size={30} />
              </button>
            </div>

            {/* Main stage: arrows + image */}
            <div className="relative flex-1 flex items-center justify-center px-4 md:px-20 min-h-0">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-3 md:left-6 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={26} />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[lightbox].src}
                  src={photos[lightbox].src}
                  alt={photos[lightbox].caption}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-full max-w-full object-contain rounded-xl md:rounded-2xl shadow-2xl select-none"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-3 md:right-6 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Caption */}
            {photos[lightbox].caption && (
              <p className="text-center text-white/80 font-medium text-[14px] md:text-[16px] px-6 pb-3 shrink-0">
                {photos[lightbox].caption}
              </p>
            )}

            {/* Thumbnail strip */}
            <div
              className="shrink-0 overflow-x-auto no-scrollbar px-4 md:px-8 pb-5 md:pb-7 pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2 md:gap-2.5 w-max mx-auto">
                {photos.map((p, i) => (
                  <button
                    key={p.src + i}
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`relative h-14 w-20 md:h-16 md:w-24 rounded-lg md:rounded-xl overflow-hidden shrink-0 transition-all duration-200 ${
                      i === lightbox
                        ? "ring-2 ring-[#e58a43] opacity-100"
                        : "opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
