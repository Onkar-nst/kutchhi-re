import React, { useEffect, useState } from 'react';
import { X, Send, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuPdfs } from '../data';

interface MenuPdf {
  title: string;
  file: string;
}

interface MenuBrochureFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  /** When set, unlocking opens this single PDF instead of listing every menu card. */
  pdf?: MenuPdf | null;
}

export default function MenuBrochureForm({ isOpen, onClose, onSuccess, pdf }: MenuBrochureFormProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Reset to the form every time the modal is (re)opened.
  useEffect(() => {
    if (isOpen) setFormState('idle');
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      if (onSuccess) onSuccess();
      // For a specific menu card, open its PDF straight away.
      if (pdf) window.open(pdf.file, '_blank', 'noopener,noreferrer');
    }, 1500);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-[2.5rem] md:rounded-[3rem] w-full max-w-lg relative z-10 overflow-hidden shadow-2xl border border-black/5"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-400 hover:text-black hover:rotate-90 transition-all duration-300 z-20"
            >
              <X size={28} />
            </button>

            <div className="p-10 md:p-14">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center flex flex-col items-center gap-6 py-2"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                    <Eye size={40} className="animate-bounce" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[2rem] font-semibold tracking-tight leading-none text-gray-950">
                      It's Ready!
                    </h3>
                    <p className="text-gray-500 font-medium text-base">
                      {pdf
                        ? `Opening the ${pdf.title} menu. Tap below if it didn't open.`
                        : 'Tap any section below to view our full menu.'}
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    {(pdf ? [pdf] : menuPdfs).map((item) => (
                      <a
                        key={item.title}
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-50 hover:bg-[#111] text-gray-950 hover:text-white border border-gray-100 hover:border-[#111] py-4 px-6 rounded-2xl font-bold text-[16px] tracking-tight transition-all flex items-center justify-between gap-3 group"
                      >
                        <span>{item.title}</span>
                        <Eye size={20} className="text-[#e58a43] group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-col gap-4 mb-10">
                    <div className="w-12 h-1 bg-[#e58a43] rounded-full" />
                    <h3 className="text-[2.4rem] md:text-[2.9rem] font-semibold tracking-tight leading-[0.95] text-gray-950">
                      get the full <br/> menu mapped
                    </h3>
                    <p className="text-gray-500 font-medium text-[16px] leading-relaxed max-w-70">
                      Leave your details to unlock our complete multi-cuisine brochure.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="group">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1 group-focus-within:text-[#e58a43] transition-colors">Full Name</label>
                      <input 
                        required 
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border border-gray-100 text-gray-950 rounded-2xl px-6 py-4.5 outline-none focus:border-[#e58a43] focus:ring-4 focus:ring-[#e58a43]/5 transition-all font-medium"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1 group-focus-within:text-[#e58a43] transition-colors">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com" 
                        className="w-full bg-gray-50 border border-gray-100 text-gray-950 rounded-2xl px-6 py-4.5 outline-none focus:border-[#e58a43] focus:ring-4 focus:ring-[#e58a43]/5 transition-all font-medium"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1 group-focus-within:text-[#e58a43] transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        className="w-full bg-gray-50 border border-gray-100 text-gray-950 rounded-2xl px-6 py-4.5 outline-none focus:border-[#e58a43] focus:ring-4 focus:ring-[#e58a43]/5 transition-all font-medium"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full bg-[#111] text-white py-6 rounded-2xl font-black text-xl tracking-tight mt-4 shadow-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          Unlock Menu
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
