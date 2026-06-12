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
              animate={{ opacity: 0.7, scale: 1 }}
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


        {/* Center Main Text */}
        <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-[-4rem] pointer-events-none w-full">
          <h2 className="text-white/90 font-normal italic text-[1.05rem] md:text-[1.4rem] mb-2 md:mb-3 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Enjoy the taste of
          </h2>

          <h1 className="text-white font-medium text-[2.75rem] sm:text-[4rem] md:text-[5rem] leading-[0.95] tracking-[-0.01em] mb-5 md:mb-7 pointer-events-auto selection:bg-white/20 drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
            Kutchhi
            <br className="md:hidden" />
            <span>{" "}</span>Caterers
          </h1>

          <p className="text-white/85 text-[13px] md:text-[15px] max-w-[340px] md:max-w-[460px] text-center font-medium leading-[1.6] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            We don't serve just food, we serve memories. That's not your
            typical promise. It's unnecessarily good. Maybe that's because
            we're unnecessarily driven.
          </p>
        </div>

        {/* Bottom Elements Wrapper */}
        <div className="relative w-full z-20 h-auto">
          {/* Glass Cards - Bottom Left */}
          <div className="absolute top-20 right-5 md:top-auto md:bottom-8 md:left-8 md:right-auto flex gap-2.5 md:gap-4 items-end">
            <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 w-[160px] md:w-[240px] ">
              <h3 className="text-white font-medium tracking-[-0.04em] text-[1.75rem] md:text-[2.5rem] mb-1.5 leading-none">
                25<span className="text-[1.25rem] md:text-[1.75rem]">+Yrs</span>
              </h3>
              <p className="text-white/70 text-[11px] md:text-[13.5px] font-medium leading-[1.5]">
                "Pure Indian" is exactly where we want to be. All in the name of
                authentic cuisine.
              </p>
            </div>

            {/* <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-full p-[6px] md:p-2 flex flex-col gap-[6px] md:gap-2">
              <div
                className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] rounded-full bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=150&q=80")',
                }}
              />
              <div
                className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] rounded-full bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&q=80")',
                }}
              />
              <div
                className="w-[42px] h-[42px] md:w-[60px] md:h-[60px] rounded-full bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80")',
                }}
              />
            </div> */}
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
    <button className="
      bg-white 
      text-gray-900
      px-[24px] py-[12px] md:px-[120px] md:py-[17px]
      rounded-full
      rounded-br-4xl
      border border-black/15
      hover:bg-gray-100
      transition-all
      pointer-events-auto
    ">
      <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none">
        Explore Goodies
      </span>
    </button>

  </div>
        </div>
      </div>
    </div>
  );
}