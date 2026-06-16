import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Users } from "lucide-react";

const stats = [
  { value: "786", label: "Happy Customers", icon: Users, accent: false },
  { value: "109", label: "Expert Chefs", icon: Sparkles, accent: true },
  { value: "25+", label: "Years of Experience", icon: Clock, accent: true },
  { value: "235", label: "Events Completed", icon: Shield, accent: false },
];

export default function OurStory() {
  return (
    <section className="bg-gray-50 w-full px-4 md:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-10 md:gap-16">

        {/* ──── HEADER (same style as FeaturedServices / Hero) ──── */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-[500px]"
          >
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
              The finest of India's cuisine is as rich and diverse as its civilization. It is an art form passed down through generations.
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right"
          >
            Our Story
          </motion.h2>
        </div>

        {/* ──── STORY CONTENT — SPLIT LAYOUT ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Left — Rich text card (dark, rounded-4xl) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-[2.5rem] md:rounded-4xl overflow-hidden bg-black p-8 md:p-14 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
            {/* Subtle radial glow */}
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 80%, #e58a43 0%, transparent 50%)' }} />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e58a43] flex items-center justify-center text-white font-black text-sm">KC</div>
                <span className="text-white/40 font-bold text-xs tracking-widest uppercase">Since 1999</span>
              </div>

              <p className="text-white/80 text-[15px] md:text-[18px] font-medium leading-[1.8] max-w-2xl">
                The finest of India's cuisine is as rich and diverse as its civilization. It is an art form that has been passed on through generations purely by word of mouth, from guru (teacher) to vidhyarthi (pupil) or from mother to daughter. The range assumes astonishing proportions when one takes into account regional variations. Very often the taste, color, aroma and appearance of the same delicacy changes from state to state.
              </p>

              <p className="text-white/60 text-[14px] md:text-[16px] font-medium leading-[1.8] max-w-2xl">
                Food customarily forms the crowning part of most festivals and celebrations. Whatever the occasion is, Indians eat with great gusto and are always looking for reasons to feast and make merry. At traditional and festive meals, the thali (plate) or banana leaf is decorated with rangoli. Thus keeping the same tradition alive, we at Kutchhi Caterers have been serving our guests for the past 25 years.
              </p>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-3 mt-10">
              {["Delicious Food", "100% Vegetarian", "Beverages", "Delicious Deals"].map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.08 }}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-bold text-xs md:text-sm tracking-wide uppercase hover:bg-white/10 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats bento grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative rounded-[2.5rem] md:rounded-4xl overflow-hidden p-6 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[240px] group cursor-default transition-all duration-500 ${
                    stat.accent
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'bg-white border border-gray-100 text-gray-950 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    stat.accent ? 'bg-[#e58a43] text-white' : 'bg-gray-100 text-gray-500 group-hover:text-[#e58a43]'
                  }`}>
                    <Icon size={20} />
                  </div>

                  {/* Value + Label */}
                  <div className="mt-auto">
                    <h3 className={`font-black text-[2.5rem] md:text-[3.5rem] tracking-[-0.04em] leading-none mb-1 ${
                      stat.accent ? 'text-[#e58a43]' : 'text-gray-950'
                    }`}>
                      {stat.value}
                    </h3>
                    <p className={`font-semibold text-[11px] md:text-[13px] tracking-tight uppercase ${
                      stat.accent ? 'text-white/60' : 'text-gray-500'
                    }`}>
                      {stat.label}
                    </p>
                  </div>

                  {/* Corner dot */}
                  <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-[#e58a43] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ──── VALUES / PHILOSOPHY STRIP ──── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Heritage", desc: "25+ years of culinary tradition rooted in authentic Indian recipes passed through generations." },
            { title: "Quality", desc: "Only the freshest ingredients. Every dish prepared with precision, care, and uncompromising standards." },
            { title: "Service", desc: "From planning to plating, our team delivers a seamless, warm, and memorable experience." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-[2.5rem] md:rounded-4xl bg-white border border-gray-100 p-8 md:p-12 group hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e58a43] text-white font-black text-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="h-[1px] flex-1 bg-gray-200 group-hover:bg-[#e58a43]/30 transition-colors duration-500" />
              </div>
              <h3 className="text-gray-950 font-black text-[1.8rem] md:text-[2.2rem] tracking-tight leading-[0.95] mb-3">
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
