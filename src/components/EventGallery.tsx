import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../data";

type TabKey = "wedding" | "sangeet" | "corporate";
const TABS: TabKey[] = ["wedding", "sangeet", "corporate"];

export default function EventGallery({ defaultTab }: { defaultTab?: string }) {
  const initial: TabKey = TABS.includes(defaultTab as TabKey) ? (defaultTab as TabKey) : "wedding";
  const [active, setActive] = useState<TabKey>(initial);
  const data = galleryData[active];

  return (
    <section className="w-full px-3 py-10 md:py-16">
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
              <div className="flex flex-wrap gap-x-7 gap-y-1.5 mt-2">
                {data.stats.map((stat, idx) => (
                  <span key={idx} className="text-gray-400 text-[13px] md:text-[14px] font-medium">
                    <span className="text-gray-950 font-semibold">{stat.value}</span> {stat.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Clean uniform photo grid — caption appears on hover */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
              {data.photos.map((photo, i) => (
                <motion.div
                  key={photo.src + i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.04 }}
                  className="relative aspect-square rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden group bg-gray-100"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-[12px] md:text-[13px] font-semibold leading-snug opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {photo.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
