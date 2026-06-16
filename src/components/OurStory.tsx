import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Users } from "lucide-react";

const stats = [
  { value: "786", label: "Happy Customers", icon: Users },
  { value: "109", label: "Expert Chefs", icon: Sparkles },
  { value: "25+", label: "Years of Experience", icon: Clock },
  { value: "235", label: "Events Completed", icon: Shield },
];

const values = [
  { title: "Heritage", desc: "25+ years of culinary tradition rooted in authentic Indian recipes passed through generations." },
  { title: "Quality", desc: "Only the freshest ingredients. Every dish prepared with precision, care, and uncompromising standards." },
  { title: "Service", desc: "From planning to plating, our team delivers a seamless, warm, and memorable experience." },
];

const tags = ["Delicious Food", "100% Vegetarian", "Beverages", "Delicious Deals"];

export default function OurStory() {
  return (
    <section className="bg-gray-50 w-full px-4 md:px-6 lg:px-8 py-10 md:py-20">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-10 md:gap-16">

        {/* ──── HEADER ──── */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 max-w-[520px]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#e58a43]" />
              <span className="text-[#e58a43] font-bold text-xs md:text-sm tracking-[0.25em] uppercase">
                Our Heritage · Since 1999
              </span>
            </div>
            <p className="text-gray-600 text-[15px] md:text-[18px] font-medium leading-[1.6]">
              The finest of India's cuisine is as rich and diverse as its civilization — an art form passed down through generations, from guru to pupil, from mother to daughter.
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5.5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right"
          >
            Our Story
          </motion.h2>
        </div>

        {/* ──── FEATURE ROW — dark story card + image with overlapping badge ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Left — Rich story card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-[2.5rem] md:rounded-4xl overflow-hidden bg-black p-8 md:p-14 flex flex-col justify-between min-h-[460px] lg:min-h-[640px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at 15% 85%, #e58a43 0%, transparent 55%)' }} />
            {/* Oversized faded serif accent */}
            <span className="absolute -top-10 -right-4 md:-right-2 text-white/[0.04] font-display font-semibold text-[12rem] md:text-[18rem] leading-none select-none pointer-events-none">
              KC
            </span>

            <div className="relative z-10 flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#e58a43] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#e58a43]/20">KC</div>
                <span className="text-white/40 font-bold text-xs tracking-[0.2em] uppercase">Kutchhi Caterers</span>
              </div>

              {/* Pull quote */}
              <p className="font-display text-white text-[1.6rem] md:text-[2.4rem] leading-[1.2] tracking-[-0.01em]">
                A taste passed down through <span className="text-[#e58a43] italic">generations</span>.
              </p>

              <p className="text-white/70 text-[15px] md:text-[17px] font-medium leading-[1.8] max-w-2xl">
                The range of India's cuisine assumes astonishing proportions when one takes into account regional variations. The taste, colour, aroma and appearance of the same delicacy changes from state to state — a living tradition we honour in every dish.
              </p>

              <p className="text-white/50 text-[14px] md:text-[16px] font-medium leading-[1.8] max-w-2xl">
                Food customarily forms the crowning part of most celebrations. Keeping that tradition alive, we at Kutchhi Caterers have been serving our guests with great gusto for the past 25 years.
              </p>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2.5 md:gap-3 mt-10">
              {tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.08 }}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-bold text-[11px] md:text-xs tracking-wide uppercase hover:bg-[#e58a43] hover:border-[#e58a43] hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — Image with overlapping badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative rounded-[2.5rem] md:rounded-4xl overflow-hidden bg-gray-900 min-h-[360px] lg:min-h-[640px] group"
          >
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
              alt="Authentic Indian culinary spread"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Floating glass badge — bottom left */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10">
              <div className="bg-white/10 backdrop-blur-[24px] border border-white/15 rounded-[1.75rem] md:rounded-[2rem] p-6 md:p-7">
                <h3 className="font-display text-white font-semibold text-[2.5rem] md:text-[3.25rem] leading-none tracking-[-0.02em] mb-1.5">
                  25<span className="text-[#e58a43] text-[1.5rem] md:text-[2rem]">+Yrs</span>
                </h3>
                <p className="text-white/75 text-[12.5px] md:text-[14px] font-medium leading-[1.5]">
                  Serving authentic Indian cuisine with love, tradition and warmth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ──── STATS BAND — black, serif orange numerals ──── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] md:rounded-4xl overflow-hidden bg-black"
        >
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 50%, #e58a43 0%, transparent 50%)' }} />
          <div className="relative grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group flex flex-col items-center text-center gap-3 px-4 py-9 md:py-12"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e58a43] group-hover:bg-[#e58a43] group-hover:text-white transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-[#e58a43] font-semibold text-[2.75rem] md:text-[4rem] tracking-[-0.02em] leading-none">
                    {stat.value}
                  </h3>
                  <p className="text-white/55 font-semibold text-[11px] md:text-[12.5px] tracking-[0.08em] uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ──── VALUES STRIP ──── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-[2.5rem] md:rounded-4xl bg-white border border-gray-100 p-8 md:p-12 group hover:border-[#e58a43]/30 hover:shadow-[0_12px_50px_rgba(229,138,67,0.08)] transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-full bg-[#e58a43] text-white font-black text-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="h-[1px] flex-1 bg-gray-200 group-hover:bg-[#e58a43]/40 transition-colors duration-500" />
              </div>
              <h3 className="text-gray-950 font-semibold text-[1.9rem] md:text-[2.4rem] tracking-[-0.01em] leading-[0.95] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14px] md:text-[15px] font-medium leading-[1.7]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
