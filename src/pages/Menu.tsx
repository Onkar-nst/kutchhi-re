import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Download, Eye } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { allMenuData, menuPdfs } from '../data';

import MenuBrochureForm from '../forms/MenuBrochureForm';
import { motion } from 'framer-motion';

interface MenuItem {
  title: string;
  items: string[];
  image?: string;
}

interface MenuData {
  pageTitle: string;
  description: string;
  categories: MenuItem[];
}

const defaultData: MenuData = {
  pageTitle: 'Our Menu',
  description: 'A glimpse into our meticulously crafted multi-cuisine offerings. For the complete culinary experience, our full brochure is available for download.',
  categories: ((allMenuData as Record<string, MenuData>)['veg-thali']?.categories) || []
};

export default function Menu() {
  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ FIXED normalization
  const normalizedCategory = category
    ? category.toLowerCase().replace(/\s+/g, '-')
    : '';

  // ✅ Mapping for correct keys
  const categoryMap: Record<string, string> = {
    'beverages': 'beverages',
    'starters': 'starters',
    'soups': 'soups',
    'soups-&-salads': 'soups',
    'main-course': 'mainCourse',
    'desserts': 'desserts',
    'cuisine-counters': 'cuisineCounters',
    'veg-thali': 'veg-thali'
  };

  const mappedCategory = categoryMap[normalizedCategory];

  const menuData: MenuData =
    ((allMenuData as Record<string, MenuData>)[mappedCategory || '']) ||
    ((allMenuData as Record<string, MenuData>)['veg-thali']) ||
    defaultData;

  const { pageTitle, description, categories } = menuData;

  useEffect(() => {
    document.title = `${pageTitle} | Kutchhi Caterers Menu`;
    
    // Smooth scroll to top when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageTitle, category]);

  // Detector for "X more..." string
  const isMoreTrigger = (text: string) => /^\d+ more\.\.\./.test(text);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen font-sans overflow-x-hidden">
      
      {/* ════════════════════════════════════════
           1. HERO SECTION (Home DNA)
         ════════════════════════════════════════ */}
      <section className="p-3 w-full">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black flex flex-col min-h-[70vh] md:min-h-[80vh]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=80")' }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-0 pointer-events-none" />

          <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-0 pointer-events-none w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2 mb-4"
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white font-semibold text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-6 pointer-events-auto capitalize"
            >
              {pageTitle.toLowerCase()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#ebebeb] text-[14px] md:text-[17px] max-w-75 md:max-w-150 font-medium leading-[1.6]"
            >
              {description}
            </motion.p>
          </div>

          {/* Corner Call to Action (SVG Cutout Style) */}
          <div className="absolute bottom-0 right-0 z-30">
            <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-3 pl-3 md:pt-4 md:pl-4">
              <svg className="absolute bottom-full right-0 w-5 h-5 md:w-7 md:h-7 text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <svg className="absolute bottom-0 right-full w-5 h-5 md:w-7 md:h-7 text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-gray-900 px-6 py-6 md:px-15 md:py-4.5 rounded-full rounded-br-4xl border border-black/15 hover:bg-gray-100 transition-all pointer-events-auto block"
              >
                <span className="font-bold text-[15px] md:text-[18px] tracking-tight leading-none flex items-center gap-3">
                  Download Full Menu <Download size={20} className="text-[#e58a43]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           2. MENU CATEGORIES (Bento Grid)
         ════════════════════════════════════════ */}
      <section className="w-full px-3 py-12 md:py-24">
        <div className="max-w-480 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat: MenuItem, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] md:rounded-4xl p-8 md:p-10 border border-black/5 flex flex-col gap-8 group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Category Image Header */}
              {cat.image && (
                <div className="w-full h-45 md:h-60 rounded-3xl md:rounded-4xl overflow-hidden bg-gray-100 relative shadow-sm">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-950 font-black text-[2rem] md:text-[2.5rem] leading-[0.9] tracking-tight group-hover:text-[#e58a43] transition-colors">
                    {cat.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500 text-[#e58a43]">
                    <Sparkles size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {cat.items.map((item: string, i: number) => {
                    const more = isMoreTrigger(item);
                    return (
                      <div key={i} className="flex items-center justify-between py-1 border-b border-gray-100/60 last:border-0 group/item">
                        {more ? (
                          <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#e58a43]/10 text-[#e58a43] px-5 py-2.5 rounded-full font-bold text-sm tracking-tight hover:bg-[#e58a43] hover:text-white transition-all flex items-center gap-2 group/btn"
                          >
                            <span className="opacity-80 group-hover/btn:opacity-100">Browse</span>
                            <span className="text-[1.1em]">{item.replace('more...', '')}</span>
                            <span>Remaining</span>
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        ) : (
                          <>
                            <span className="text-gray-600 font-medium text-[15px] md:text-[16px] group-hover/item:text-gray-950 transition-colors flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-[#e58a43] transition-colors" />
                              {item}
                            </span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
           3. VIEWABLE MENU PDFs
         ════════════════════════════════════════ */}
      <section className="w-full px-3 pb-12 md:pb-20">
        <div className="max-w-480 mx-auto flex flex-col gap-10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 px-2 md:px-0">
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6] max-w-[420px]">
              Browse our menu cards section by section. Each opens in a new tab, view it online or save it for later.
            </p>
            <h2 className="text-gray-950 font-semibold text-[2.4rem] sm:text-[3.4rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
              Menu Cards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {menuPdfs.map((pdf, idx) => (
              <motion.a
                key={idx}
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-[2rem] md:rounded-4xl overflow-hidden border border-black/5 aspect-[3/4] flex flex-col justify-end hover:shadow-[0_24px_70px_-20px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* PDF first-page cover as background */}
                <img
                  src={pdf.thumb}
                  alt={`${pdf.title} menu cover`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-colors duration-500" />

                {/* PDF badge */}
                <span className="absolute top-5 right-5 z-10 text-[11px] font-black uppercase tracking-widest text-white/70 bg-black/25 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/15">
                  PDF
                </span>

                {/* Bottom content */}
                <div className="relative z-10 p-6 md:p-7 flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-white font-black text-[1.5rem] md:text-[1.9rem] leading-[0.95] tracking-tight drop-shadow-sm">
                      {pdf.title}
                    </h3>
                    <p className="text-white/70 font-medium text-[13px] md:text-[14px] leading-relaxed">
                      {pdf.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold text-[14px] md:text-[15px] bg-white/10 group-hover:bg-[#e58a43] backdrop-blur-sm border border-white/15 group-hover:border-[#e58a43] rounded-full px-5 py-2.5 w-fit transition-colors duration-500">
                    <Eye size={17} />
                    <span>View Menu</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           4. SUGGESTIONS & CTA
         ════════════════════════════════════════ */}


      <section className="w-full px-3 pb-12">
        <div className="max-w-480 mx-auto relative rounded-4xl overflow-hidden bg-black p-10 md:p-24 text-center">
           <img 
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=2000&q=80" 
            alt="Feast Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-white text-[3rem] md:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.02em]">
              hungry for <br className="md:hidden" /> the rest?
            </h2>
            <p className="text-white/60 text-base md:text-xl max-w-xl font-medium leading-relaxed">
              Unlock our legendary 50+ page catalog of gourmet delights, signature setups, and bespoke catering options.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e58a43] text-white px-10 py-6 rounded-full font-black text-xl hover:bg-[#d67a32] hover:scale-105 transition-all shadow-2xl flex items-center gap-3"
            >
              <Download size={24} />
              Get The Complete Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Standalone Modal Component */}
      <MenuBrochureForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}