import { Instagram, Twitter, Mail, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 p-3 mb-20 md:mb-0 flex flex-col items-center">
      
      {/* Massive Dark Rounded Container */}
      <div className="relative w-full max-w-480 rounded-4xl overflow-hidden bg-black flex flex-col justify-end min-h-87.5 md:min-h-125 ">

        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opactiy-[0.85]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2070&q=80")'  }}
        />
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        {/* Frosted Glass Panel */}
        <div className="relative z-10 w-full bg-linear-to-t from-black/90 via-black/80 to-transparent pt-32 pb-12 px-6 flex flex-col items-center justify-end">
          
          {/* Social Icons Row */}
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Info size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Faint Divider */}
          <div className="w-full max-w-4xl h-px bg-white/10 mb-8 rounded-full "></div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[14px] md:text-[16px] font-bold tracking-tight text-white pb-6 md:pb-2">
            <Link to="/" className="text-[#e58a43] hover:text-[#d67b38] transition-colors">Homepage</Link>
            <Link to="/about" className="text-white hover:text-[#e58a43] transition-colors">About Us</Link>
            <Link to="/services" className="text-white hover:text-[#e58a43] transition-colors">Services</Link>
            <Link to="/contact" className="text-white hover:text-[#e58a43] transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Bottom Left Cutout Tab for Copyright */}
        <div className="absolute bottom-0 left-0 z-30">
          <div className="relative bg-gray-50 rounded-tr-4xl pt-3.5 pr-3.5">
            {/* Top Curve */}
            <svg 
              className="absolute bottom-full left-0 w-7 h-7 text-gray-50"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M0 32V0C0 17.673 14.327 32 32 32H0Z" />
            </svg>

            {/* Right Curve */}
            <svg 
              className="absolute bottom-0 left-full w-7 h-7 text-gray-50"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M0 32V0C0 17.673 14.327 32 32 32H0Z" />
            </svg>

            {/* BUTTON */}
            <div className="bg-white text-gray-900 px-5.5 py-3 md:px-7 md:py-3.5 rounded-full rounded-bl-4xl border border-black/15 hover:bg-gray-100 transition flex items-center justify-center">
              <span className="font-medium text-[12.5px] md:text-[14.5px] tracking-[-0.02em]">
                Copyright © 2026 Kutchhi Caterers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
