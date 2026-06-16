import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "../data";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToCuisines = () => {
    document
      .getElementById("popular-cuisines")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-3 w-full flex flex-col items-center">
      <div className="relative w-full flex-1 rounded-4xl overflow-hidden bg-black flex flex-col">
        {/* Background slider — <img> so EXIF-rotated photos display upright */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={active}
              src={heroSlides[active]}
              alt="Kutchhi Caterers event"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.2 }, scale: { duration: 5, ease: "easeOut" } }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />
        {/* Soft center scrim so the headline stays legible over busy photos */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 55% at center, rgba(0,0,0,0.5) 0%, transparent 65%)' }}
        />


        {/* Center Main Text — left aligned */}
        <div className="flex-1 flex flex-col items-start justify-center z-10 px-6 sm:px-10 md:px-12 lg:px-16 pointer-events-none w-full">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <span className="h-px w-8 md:w-12 bg-[#e58a43]" />
            <h2 className="text-[#e9b07a] font-normal text-[1.1rem] md:text-[1.45rem] tracking-[0.06em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Enjoy the taste of
            </h2>
          </div>

          <h1 className="text-white font-medium text-left text-[2.6rem] sm:text-[3.8rem] md:text-[4.6rem] leading-[0.95] tracking-[-0.01em] mb-5 md:mb-7 pointer-events-auto selection:bg-white/20 drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
            Kutchhi
            <br className="md:hidden" />
            <span>{" "}</span>Caterers
          </h1>

          <p className="text-white/85 text-[15px] md:text-[17px] max-w-[420px] md:max-w-[520px] text-left font-medium leading-[1.55] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            We don't serve just food, we serve memories. That's not your
            typical promise. It's unnecessarily good. Maybe that's because
            we're unnecessarily driven.
          </p>

          {/* Stats strip — single moving line (marquee) */}
          <div className="mt-6 md:mt-8 w-full max-w-full md:max-w-[680px] overflow-hidden pointer-events-auto [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max items-stretch animate-marquee">
              {[0, 1].map((dup) => (
                <div key={dup} aria-hidden={dup === 1} className="flex items-stretch shrink-0">
                  {[
                    { value: "25+", label: "Years of Service" },
                    { value: "1500+", label: "Events Catered" },
                    { value: "1M+", label: "Happy Guests" },
                    { value: "250+", label: "Menu Options" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-stretch">
                      <div className="flex flex-col justify-center px-5 md:px-7 whitespace-nowrap">
                        <span className="text-[#e9b07a] font-semibold text-[1.5rem] md:text-[2rem] leading-none tracking-[-0.02em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                          {stat.value}
                        </span>
                        <span className="text-white/75 text-[11px] md:text-[13px] font-medium uppercase tracking-[0.14em] mt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                          {stat.label}
                        </span>
                      </div>
                      <span className="w-px self-stretch bg-[#e58a43]/30" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute bottom-6 md:bottom-9 left-1/2 -translate-x-1/2 z-30 flex gap-2 pointer-events-auto">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Bottom Right Explore Goodies Cutout - Refined to match perfectly symmetric curves */}
        <div className="absolute bottom-0 right-0 z-30">

  <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">

    {/* Top Curve */}
    <svg
      className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
    </svg>

    {/* Left Curve */}
    <svg
      className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
    </svg>

    {/* BUTTON (SLIM + PREMIUM) */}
    <button
      type="button"
      onClick={scrollToCuisines}
      className="
      inline-flex items-center justify-center
      bg-white
      text-gray-900
      px-[24px] py-[12px] md:px-[120px] md:py-[17px]
      rounded-full
      rounded-br-4xl
      border border-black/15
      hover:bg-gray-100
      transition-all
      pointer-events-auto
      cursor-pointer
    ">
      <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none">
        Explore Menu
      </span>
    </button>

  </div>
        </div>
      </div>
    </div>
  );
}