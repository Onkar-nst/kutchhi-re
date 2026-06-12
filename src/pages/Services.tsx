import { ArrowRight, Phone, Sparkles, Shield, Clock, Users, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import EventGallery from "../components/EventGallery";

/* ────── count-up number that animates when scrolled into view ────── */
function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? 1 : 0;

  useEffect(() => {
    if (!match || !inView) return;
    const controls = animate(mv, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span className={className}>{value}</span>;
  return <span ref={ref} className={className}>{"0" + suffix}</span>;
}

/* ────── general overview content (whole-company, not one service) ────── */
const stats = [
  { value: "25+", label: "Years of Service" },
  { value: "1500+", label: "Events Catered" },
  { value: "1M+", label: "Happy Guests" },
  { value: "250+", label: "Menu Options" },
];

const features = ["Bespoke Menu Design", "Live Counter Experience", "Full Service Staff", "Elegant Event Setups"];

/* highlight points for the "What We Do" editorial block */
const whatWeDo = [
  { Icon: Sparkles, label: "Bespoke multi-cuisine menus" },
  { Icon: Shield, label: "FSSAI-certified pure-veg kitchen" },
  { Icon: Users, label: "From 50 to 5,000+ guests" },
  { Icon: Clock, label: "25+ years of experience" },
];

const process = [
  { step: "01", title: "Consultation", desc: "We sit with you to understand your vision, guest count, dietary needs and the ambiance you imagine for your event." },
  { step: "02", title: "Menu Curation", desc: "Our master chefs craft a bespoke multi-cuisine menu — from traditional Gujarati thalis to global live counters." },
  { step: "03", title: "Tasting Session", desc: "Experience your custom menu at our kitchen before the event. Fine-tune every spice level, portion and presentation." },
  { step: "04", title: "Flawless Execution", desc: "On the day, our team arrives early — live counters, elegant setups and impeccable service from start to finish." },
];

const faqs = [
  { q: "What types of events do you cater?", a: "From weddings and sangeet nights to corporate galas and grand buffets, we handle every kind of celebration — at any scale, anywhere in India." },
  { q: "What's the minimum and maximum guest count?", a: "We comfortably cater intimate gatherings of 50 right up to grand functions of 5,000+ guests, with the same quality and timing at every scale." },
  { q: "Can we customise the menu and arrange a tasting?", a: "Absolutely. Every menu is built around your palate and traditions, and we invite you for a full tasting at our kitchen before the event." },
  { q: "Which cities and regions do you serve?", a: "We're based in Mumbai and travel pan-India — our team handles logistics, setup and staffing wherever your venue is." },
  { q: "Is everything pure vegetarian?", a: "Yes. We're a 100% pure-vegetarian, FSSAI-certified kitchen specialising in authentic Gujarati and multi-cuisine spreads." },
];

const iconMap = [Sparkles, Shield, Clock, Users];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen font-sans">

      {/* ═══════ 1. HERO BANNER (Explore our services) ═══════ */}
      <section className="p-3 w-full">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black flex flex-col min-h-[70vh] md:min-h-[80vh]">
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />

          {/* Center text */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-[-4rem] pb-44 md:pb-0 pointer-events-none w-full">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white font-[500] text-[1.25rem] md:text-[1.8rem] lg:text-[2rem] mb-1 md:mb-2 tracking-tight"
            >
              Explore our
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-white font-semibold text-[3.25rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-4 md:mb-6 pointer-events-auto selection:bg-white/20 text-center"
            >
              services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#ebebeb] text-[13px] md:text-[15px] max-w-[280px] md:max-w-[480px] text-center font-medium leading-[1.6]"
            >
              From intimate gatherings to massive corporate galas, we bring the finest culinary experiences straight to your venue.
            </motion.p>
          </div>

          {/* Glass cards – bottom left */}
          <div className="absolute bottom-[90px] left-5 md:bottom-8 md:left-8 flex gap-2.5 md:gap-4 items-end z-20">
            <div className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 w-[160px] md:w-[240px]">
              <h3 className="text-white font-medium tracking-[-0.04em] text-[1.75rem] md:text-[2.5rem] mb-1.5 leading-none">
                4<span className="text-[1.25rem] md:text-[1.75rem]">+</span>
              </h3>
              <p className="text-white/70 text-[11px] md:text-[13.5px] font-medium leading-[1.5]">
                Signature catering formats designed for every occasion.
              </p>
            </div>
          </div>

          {/* SVG cutout button – bottom right */}
          <div className="absolute bottom-0 right-0 z-30">
            <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">
              <svg className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <svg className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor">
                <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
              </svg>
              <Link to="/contact" className="bg-white text-gray-900 px-[24px] py-[12px] md:px-[80px] md:py-[17px] rounded-full rounded-br-4xl border border-black/15 hover:bg-gray-100 transition-all pointer-events-auto block">
                <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none">
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 2. STATS COUNTER (count-up) ═══════ */}
      <section className="w-full px-3 py-6 md:py-8">
        <div className="max-w-[1920px] mx-auto rounded-[2rem] md:rounded-4xl bg-white border border-gray-100 px-4 md:px-10 py-9 md:py-11">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`flex flex-col items-center text-center px-2 ${idx !== 0 ? "md:border-l border-gray-100" : ""}`}
              >
                <CountUp
                  value={stat.value}
                  className="font-display text-gray-950 font-semibold text-[2rem] md:text-[2.75rem] tracking-[-0.02em] leading-none mb-2"
                />
                <p className="text-gray-500 text-[12.5px] md:text-[14px] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 3. WEDDING / SANGEET / CORPORATE GALLERY ═══════ */}
      <EventGallery />

      {/* ═══════ 4. WHAT WE DO ═══════ */}
      <section className="w-full px-3 py-10 md:py-16">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-9 md:gap-14">

          {/* Header row */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0">
            <div className="flex flex-col gap-4 max-w-[460px]">
              <h4 className="text-[#e58a43] font-bold tracking-[0.25em] uppercase text-xs md:text-sm">Who We Are</h4>
              <p className="text-gray-600 text-[16px] md:text-[19px] font-medium leading-[1.7]">
                For over two decades, Kutchhi Caterers has turned celebrations into feasts to remember — blending authentic Gujarati flavours with multi-cuisine artistry and white-glove service.
              </p>
            </div>
            <motion.h2 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
              What We<br />Do
            </motion.h2>
          </div>

          {/* Editorial split — image quote + highlight panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative rounded-4xl overflow-hidden bg-gray-900 min-h-[320px] md:min-h-[480px]"
            >
              <img
                src="/photos/11.JPG"
                alt="Kutchhi Caterers grand spread"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
              <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10 md:right-10">
                <p className="text-white font-display text-[1.6rem] md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] max-w-xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]">
                  We don't serve just food — we serve memories.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 rounded-4xl bg-white border border-gray-100 p-8 md:p-10 flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-6">
                <p className="text-gray-500 text-[15px] md:text-[16px] font-medium leading-[1.7]">
                  Whether it's a wedding, a sangeet night, a corporate gala or a grand buffet, every event is crafted from scratch around your taste, your traditions and your guest count.
                </p>
                <div className="flex flex-col divide-y divide-gray-100">
                  {whatWeDo.map(({ Icon, label }, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3.5">
                      <span className="shrink-0 w-10 h-10 rounded-xl bg-[#e58a43]/10 text-[#e58a43] flex items-center justify-center">
                        <Icon size={19} />
                      </span>
                      <span className="text-gray-900 font-semibold text-[15px] md:text-[16px] tracking-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-gray-950 text-white px-7 py-4 rounded-full font-bold text-[15px] md:text-[16px] flex items-center justify-center gap-2 hover:bg-[#e58a43] transition-colors group"
              >
                Get a Quote <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ 5. WHAT'S INCLUDED ═══════ */}
      <section className="w-full px-3 pb-10 md:pb-16">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0">
            <div className="flex flex-col gap-4 max-w-[400px]">
              <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
                Every detail is designed to exceed your expectations, from ingredient sourcing to final plating.
              </p>
            </div>
            <h2 className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
              What's<br />Included
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, idx) => {
              const Icon = iconMap[idx % iconMap.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white border border-gray-100 p-7 md:p-8 flex flex-col gap-5 hover:border-[#e58a43]/30 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#e58a43]/10 text-[#e58a43] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-gray-950 font-semibold text-[1.25rem] md:text-[1.4rem] tracking-tight leading-snug">
                    {feature}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ 6. OUR PROCESS ═══════ */}
      <section className="w-full px-3 py-10 md:py-20">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0 mb-12 md:mb-20">
            <div className="flex flex-col gap-4 max-w-[400px]">
              <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
                Our proven four-step approach ensures every event we cater is nothing short of extraordinary.
              </p>
            </div>
            <h2 className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
              Our<br />Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {process.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative rounded-[2.5rem] md:rounded-4xl overflow-hidden bg-white border border-gray-100 p-8 md:p-12 group hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                <div className="absolute -top-4 -right-2 text-gray-100 text-[10rem] md:text-[14rem] font-black leading-none pointer-events-none select-none group-hover:text-gray-50 transition-colors duration-500">
                  {p.step}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#e58a43] text-white flex items-center justify-center font-black text-sm">
                      {p.step}
                    </div>
                    <div className="h-[1px] flex-1 bg-gray-200 group-hover:bg-[#e58a43]/30 transition-colors duration-500" />
                  </div>
                  <h3 className="text-gray-950 font-black text-[1.8rem] md:text-[2.5rem] tracking-tight leading-[0.95] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] md:text-[16px] font-medium leading-[1.7] max-w-md">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. FAQ (accordion) ═══════ */}
      <section className="w-full px-3 py-10 md:py-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0 mb-10 md:mb-16">
            <div className="flex flex-col gap-4 max-w-[400px]">
              <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
                Everything you usually want to know before booking — answered.
              </p>
            </div>
            <h2 className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
              Questions,<br />Answered
            </h2>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-gray-100 overflow-hidden transition-colors duration-300 hover:border-gray-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left p-6 md:p-7"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-gray-950 font-semibold text-[1.15rem] md:text-[1.4rem] tracking-tight leading-snug">
                      {faq.q}
                    </h3>
                    <span
                      className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full grid place-items-center transition-all duration-300 ${
                        isOpen ? "bg-[#e58a43] text-white rotate-180" : "bg-[#e58a43]/10 text-[#e58a43]"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-[14px] md:text-[16px] font-medium leading-[1.7] px-6 md:px-7 pb-6 md:pb-7 max-w-3xl">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ 8. CTA BANNER ═══════ */}
      <section className="w-full px-3 pb-6">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, #e58a43 0%, transparent 60%)' }} />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white font-black text-[2.5rem] md:text-[4rem] leading-[0.85] tracking-[-0.04em] mb-4">
                Let's make your<br />event unforgettable
              </motion.h2>
              <p className="text-white/60 text-[14px] md:text-[16px] font-medium leading-[1.6] max-w-sm">
                Get in touch with our experts to curate a menu that fits your vision perfectly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-gray-900 px-10 py-4 rounded-full font-medium text-[16px] md:text-[18px] tracking-[-0.02em] hover:bg-gray-100 transition-all flex items-center gap-2 group whitespace-nowrap">
                Contact Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+919892134834" className="border border-white/20 text-white px-10 py-4 rounded-full font-medium text-[16px] md:text-[18px] tracking-[-0.02em] hover:bg-white/10 transition-all flex items-center gap-2 whitespace-nowrap">
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
