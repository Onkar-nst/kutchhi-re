import { useState } from 'react';
import { ArrowRight, Star, Plus, X, Eye } from 'lucide-react';
import { menuPdfs } from '../data';
import MenuBrochureForm from '../forms/MenuBrochureForm';

type MenuPdf = (typeof menuPdfs)[number];

export default function PopularDishes2() {
  // Which panel is opened in place (mobile tap / desktop click). null = none.
  const [active, setActive] = useState<number | null>(null);
  // The PDF whose details popup is currently open (null = closed).
  const [selectedPdf, setSelectedPdf] = useState<MenuPdf | null>(null);
  // "View Full Menu" → unlock-gated popup listing every menu section.
  const [fullMenuOpen, setFullMenuOpen] = useState(false);

  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-480 rounded-4xl overflow-hidden bg-black p-6 md:p-12 lg:p-16 flex flex-col gap-10 shadow-2xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10 w-full pl-2">
          <div>
            <h4 className="text-[#e58a43] font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <Star size={16} fill="currentColor" /> Offer Zone
            </h4>
            <h2 className="text-white font-semibold text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.02em]">
              popular cuisines
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setFullMenuOpen(true)}
            className="bg-white text-gray-950 px-6 py-3.5 md:px-9 md:py-4.5 rounded-full flex items-center justify-center border border-transparent hover:bg-gray-200 transition-colors pointer-events-auto shadow-lg"
          >
            <span className="font-semibold text-[16px] md:text-[18px] tracking-[-0.01em] leading-none">View Full Menu</span>
          </button>
        </div>

        {/* Expanding panels — vertical accordion on mobile, horizontal on desktop.
            Tapping/clicking a panel opens it in place (no redirect). */}
        <div className="flex flex-col md:flex-row h-200 md:h-150 lg:h-175 gap-3 md:gap-4 w-full">
          {menuPdfs.map((pdf, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onClick={() => setActive(isActive ? null : i)}
                className={`relative rounded-4xl overflow-hidden group transition-[flex] duration-700 ease-out cursor-pointer bg-gray-900 border border-white/10 ${
                  isActive ? 'flex-5 md:flex-3 lg:flex-4' : 'flex-1'
                } md:hover:flex-3 lg:hover:flex-4`}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100 ${
                    isActive ? 'opacity-100 scale-105' : 'opacity-60'
                  }`}
                  style={{ backgroundImage: `url(${pdf.img})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20 z-0" />

                {/* Collapsed label — hidden once the panel is open */}
                <div className={`absolute inset-0 flex items-end md:items-center justify-between md:justify-center px-5 pb-6 md:px-0 md:pb-12 z-10 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 md:group-hover:opacity-0'}`}>
                  <h3 className="text-white font-bold text-[1.5rem] md:text-[2rem] tracking-tight leading-none md:-rotate-90 md:-translate-y-24 whitespace-nowrap drop-shadow-lg">
                    {pdf.title}
                  </h3>
                  {/* Plus affordance — only on mobile collapsed bars */}
                  <span className="md:hidden shrink-0 w-10 h-10 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-white">
                    <Plus size={20} />
                  </span>
                </div>

                {/* Opened details — revealed in place on tap (mobile) / hover-click (desktop) */}
                <div className={`absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4 lg:inset-x-6 lg:bottom-6 border border-white/20 bg-black/50 backdrop-blur-xl rounded-3xl p-5 md:p-7 transition-all duration-500 z-20 flex flex-col gap-4 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto'
                }`}>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-white font-black text-[1.6rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[-0.03em] leading-none drop-shadow-md">
                        {pdf.title}
                      </h3>
                      <p className="text-white/80 font-medium text-[15px] md:text-[17px] max-w-lg leading-relaxed">
                        {pdf.desc}
                      </p>
                    </div>
                    {/* Close on mobile */}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setActive(null); }}
                      aria-label="Close"
                      className="md:hidden shrink-0 w-9 h-9 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-white"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Item teaser chips — a few dishes from this menu PDF */}
                  {pdf.preview.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {pdf.preview.map((item, k) => (
                        <span key={k} className="text-white/90 text-[12px] md:text-[13px] font-medium bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setSelectedPdf(pdf); }}
                    className="mt-1 w-fit flex items-center gap-2 bg-white text-black font-bold text-[14px] md:text-[15px] rounded-full pl-5 pr-4 py-2.5 hover:bg-[#e58a43] hover:text-white transition-colors"
                  >
                    <Eye size={16} strokeWidth={2.5} />
                    View PDF
                    <ArrowRight strokeWidth={2.5} size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Details popup — unlocking opens this card's PDF */}
      <MenuBrochureForm
        isOpen={selectedPdf !== null}
        onClose={() => setSelectedPdf(null)}
        pdf={selectedPdf}
      />

      {/* Full menu popup — unlocking lists every menu section */}
      <MenuBrochureForm
        isOpen={fullMenuOpen}
        onClose={() => setFullMenuOpen(false)}
      />
    </section>
  );
}
