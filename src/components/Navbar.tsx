// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';


export default function Navbar() {

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-[#7A1A1A] text-white px-6 py-[10px] rounded-[2rem] text-[15px] font-semibold tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
      : "border border-white/20 text-[#f4f4f4] px-6 py-[10px] rounded-[2rem] text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md";

  return (
    <nav className="absolute w-full z-50 p-4 md:p-6 lg:p-8 flex justify-between items-center pointer-events-none">
      
      <div className="flex-1 flex justify-start pointer-events-auto p-3 md:p-0">
        <Link to="/" className="flex items-center justify-center bg-white border border-white/10 rounded-4xl px-4 py-1.5 transition-colors">
          <img src="/logo.png" alt="Kutchhi Caterers Logo" className="h-15 md:h-20 w-auto object-contain" />
        </Link>
      </div>

      {/* Desktop Middle Nav */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-3 pointer-events-auto">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
        {/* <NavLink to="/instagram" className={navLinkClass}>
          <div className="flex items-center gap-2">
            <Instagram size={18} />
            <span>Feed</span>
          </div>
        </NavLink> */}
      </div>

      <div className="hidden md:flex flex-1 justify-end items-center gap-3 pointer-events-auto">
        <Link to="/contact" className="border border-white/20 text-[#f4f4f4] px-6 py-2.5 rounded-4xl text-[15px] font-medium hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap bg-black/10 backdrop-blur-md">
          Contact Us
        </Link>
      </div>


    </nav>
  );
}
