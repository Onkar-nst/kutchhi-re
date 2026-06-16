import OurStory from "../components/OurStory";
import AboutVideo from "../components/AboutVideo";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen font-sans">

      {/* ═══════ HERO BANNER (Home Hero DNA) ═══════ */}
      <section className="p-3 w-full">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black flex flex-col min-h-[70vh] md:min-h-[80vh]">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />

          {/* Center text */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 pt-12 md:pt-0 md:mt-[-4rem] pb-4 md:pb-0 pointer-events-none w-full">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white font-[500] text-[1.25rem] md:text-[1.8rem] lg:text-[2rem] mb-1 md:mb-2 tracking-tight"
            >
              Get to know
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-white font-semibold text-[3.25rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-4 md:mb-6 pointer-events-auto selection:bg-white/20 text-center"
            >
              about us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#ebebeb] text-[13px] md:text-[15px] max-w-[280px] md:max-w-[480px] text-center font-medium leading-[1.6]"
            >
              Each country has its own kind of food and taste to offer. India has a very variety of dishes and the hospitality of the Indians is legendary.
            </motion.p>
          </div>

          {/* Glass card – bottom left */}
          <div className="absolute bottom-[90px] left-5 md:bottom-8 md:left-8 hidden md:flex gap-2.5 md:gap-4 items-end z-20">
            <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 w-[160px] md:w-[240px]">
              <h3 className="text-white font-medium tracking-[-0.04em] text-[1.75rem] md:text-[2.5rem] mb-1.5 leading-none">
                25<span className="text-[1.25rem] md:text-[1.75rem]">+Yrs</span>
              </h3>
              <p className="text-white/70 text-[11px] md:text-[13.5px] font-medium leading-[1.5]">
                Serving authentic Indian cuisine with love and tradition.
              </p>
            </div>
          </div>

          {/* SVG cutout – bottom right */}
          <div className="absolute bottom-0 right-0 z-30">
            <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">
              <svg className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <svg className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <Link to="/contact" className="bg-white text-gray-900 px-[24px] py-[12px] md:px-[80px] md:py-[17px] rounded-full rounded-br-4xl border border-black/15 hover:bg-gray-100 transition-all pointer-events-auto block">
                <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none flex items-center gap-2">
                  Get in Touch <ArrowRight size={18} className="hidden md:inline" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OurStory />
      <AboutVideo />
      <ContactForm />
    </div>
  );
}
