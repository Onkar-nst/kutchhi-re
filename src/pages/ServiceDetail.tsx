import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data";
import { ArrowLeft, ArrowRight, Phone, Sparkles, Shield, Clock, Users, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import EventGallery from "../components/EventGallery";

/* ────── count-up number that animates when scrolled into view ────── */
function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);

  // split leading number (e.g. "50") from suffix (e.g. "k+"); non-numeric values render as-is
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

/* ────── per-service extra content ────── */
const serviceContent: Record<string, {
  tagline: string;
  stats: { value: string; label: string }[];
  process: { step: string; title: string; desc: string }[];
  gallery: string[];
  faqs: { q: string; a: string }[];
}> = {
  wedding: {
    tagline: "Where every dish tells your love story",
    stats: [
      { value: "500+", label: "Weddings Catered" },
      { value: "50k+", label: "Happy Guests" },
      { value: "200+", label: "Menu Options" },
      { value: "25+", label: "Years Experience" },
    ],
    process: [
      { step: "01", title: "Consultation", desc: "We sit with you to understand your vision, dietary needs, cultural preferences and the ambiance you desire for your special day." },
      { step: "02", title: "Menu Curation", desc: "Our master chefs craft a bespoke multi-course menu tailored to your palate, from traditional Gujarati thalis to contemporary fusion." },
      { step: "03", title: "Tasting Session", desc: "Experience your custom menu at our kitchen before the big day. Fine-tune every spice level, presentation, and portion size." },
      { step: "04", title: "Flawless Execution", desc: "On your day, our team arrives hours early. Live counters, elegant buffet setups, and impeccable service from start to end." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de889243da87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    ],
    faqs: [
      { q: "What's the minimum and maximum guest count?", a: "We comfortably cater intimate gatherings of 50 right up to grand functions of 5,000+ guests, with the same quality, hygiene and timing at every scale." },
      { q: "Can we customise the menu and arrange a tasting?", a: "Absolutely. Every wedding menu is built from scratch around your palate and family traditions, and we invite you for a full tasting session at our kitchen before the big day." },
      { q: "Which cities and regions do you serve?", a: "We're based in Mumbai and travel pan-India for weddings, our team handles logistics, setup and staffing wherever your venue is." },
      { q: "How far in advance should we book?", a: "For peak wedding-season dates we recommend booking 3 to 6 months ahead. That said, reach out anytime, we'll always try to accommodate your date." },
      { q: "Is everything pure vegetarian?", a: "Yes. We're a 100% pure-vegetarian, FSSAI-certified kitchen specialising in authentic Gujarati and multi-cuisine spreads." },
    ],
  },
  corporate: {
    tagline: "Elevate every boardroom and banquet",
    stats: [
      { value: "300+", label: "Corporate Events" },
      { value: "100+", label: "Partner Companies" },
      { value: "150+", label: "Menu Options" },
      { value: "25+", label: "Years Experience" },
    ],
    process: [
      { step: "01", title: "Brief & Budget", desc: "We align with your event manager to understand the scale, dietary restrictions, and corporate branding requirements." },
      { step: "02", title: "Menu Design", desc: "From elegant breakfast boxes to multi-course gala dinners, we design a menu that matches your corporate identity." },
      { step: "03", title: "Logistics Planning", desc: "Our operations team maps out delivery, setup, and staffing with military precision for seamless execution." },
      { step: "04", title: "Day-of Excellence", desc: "Professional uniformed staff, branded setups, and impeccable timing, your event runs without a hitch." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de889243da87?auto=format&fit=crop&w=800&q=80",
    ],
    faqs: [
      { q: "What scale of corporate events do you handle?", a: "From boardroom lunches of 20 to company galas of 2,000+ guests, we scale seamlessly while keeping presentation, branding and timing sharp." },
      { q: "Can the menu match our brand and dietary needs?", a: "Yes, we design menus around your brand, schedule and dietary requirements, and arrange tastings for larger events and recurring contracts." },
      { q: "Which cities and regions do you serve?", a: "We're based in Mumbai with pan-India delivery and on-site setup for corporate functions of every kind." },
      { q: "How far in advance should we book?", a: "A week or two is ideal for plated events and gala dinners; we also handle last-minute and repeat corporate requests wherever possible." },
      { q: "Is everything pure vegetarian?", a: "Yes, every menu is 100% pure vegetarian and FSSAI-certified, presented to executive standards." },
    ],
  },
  sangeet: {
    tagline: "Small bites, big beats, fuel for the dance floor",
    stats: [
      { value: "300+", label: "Sangeet Nights" },
      { value: "80+", label: "Mocktail Recipes" },
      { value: "100+", label: "Snack Varieties" },
      { value: "25+", label: "Years Experience" },
    ],
    process: [
      { step: "01", title: "Vibe & Theme", desc: "From neon nights to royal Rajwada, we match the food, counters and colours to the mood of your celebration." },
      { step: "02", title: "Mocktail & Bites", desc: "A signature mocktail bar paired with live chaat, tikka and global street-food stations that keep energy high." },
      { step: "03", title: "Dessert Theatre", desc: "Interactive dessert stations, from kulfi carts to live jalebi, that double up as the perfect backdrop." },
      { step: "04", title: "Roaming Service", desc: "Elegantly uniformed servers circulate the floor so guests never miss a beat, or a bite." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    ],
    faqs: [
      { q: "What guest count works for a sangeet night?", a: "From close-knit sangeets of 80 to high-energy nights of 2,000+ guests, our counters and roaming service keep pace with the dance floor." },
      { q: "Can we pick our own counters and theme?", a: "Yes, choose your signature mocktail bar, live chaat and dessert stations, and we'll tailor the spread and styling to your theme." },
      { q: "Which cities and regions do you serve?", a: "We're Mumbai-based with pan-India service for sangeet and pre-wedding functions." },
      { q: "How far in advance should we book?", a: "2 to 3 months ahead is ideal during wedding season; we'll always try to make shorter notice work." },
      { q: "Is everything pure vegetarian?", a: "Yes, 100% pure vegetarian and FSSAI-certified, from the mocktails to the desserts." },
    ],
  },
  buffet: {
    tagline: "A grand celebration on every platter",
    stats: [
      { value: "1000+", label: "Buffets Served" },
      { value: "1M+", label: "Meals Served" },
      { value: "250+", label: "Dish Varieties" },
      { value: "25+", label: "Years Experience" },
    ],
    process: [
      { step: "01", title: "Cuisine Selection", desc: "Pick from authentic Gujarati, Rajasthani, Punjabi, South Indian, Chinese, Continental and many more regional specialties." },
      { step: "02", title: "Scale Planning", desc: "Whether 50 guests or 5,000, we plan quantities, stations, and service flow for a perfect dining rhythm." },
      { step: "03", title: "Setup & Décor", desc: "Elegant chafing dishes, live counters, themed table décor, we transform your venue into a culinary paradise." },
      { step: "04", title: "Grand Service", desc: "Our trained service staff ensures hot food stays hot, stations stay restocked, and every guest leaves fully satisfied." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de889243da87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    ],
    faqs: [
      { q: "How many guests can a buffet serve?", a: "Our buffets run smoothly from 50 to 5,000+ guests, with stations and staffing planned for a perfect, unhurried dining flow." },
      { q: "Which cuisines can we choose from?", a: "Pick from authentic Gujarati, Rajasthani, Punjabi, South Indian, Chinese, Continental and more, all tailored to your event and mixed to taste." },
      { q: "Which cities and regions do you serve?", a: "We're Mumbai-based and cater pan-India for buffets of any scale." },
      { q: "How far in advance should we book?", a: "1 to 3 months ahead is ideal for large buffets; smaller events can usually be arranged on shorter notice." },
      { q: "Is everything pure vegetarian?", a: "Yes, entirely pure vegetarian and FSSAI-certified, served with the warm hospitality we're known for." },
    ],
  },
};

/* ────── small reusable icon map ────── */
const iconMap = [Sparkles, Shield, Clock, Users];

/* ────── FAQ accordion (click to expand) ────── */
function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full px-3 py-10 md:py-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0 mb-10 md:mb-16">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
              Everything you usually want to know before booking, answered.
            </p>
          </div>
          <h2 className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
            Questions,<br />Answered
          </h2>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-gray-100 overflow-hidden transition-colors duration-300 hover:border-gray-200"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
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
  );
}

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const extra = serviceContent[id || ""] || serviceContent.wedding;

  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0.2]);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h2>
          <Link to="/services" className="text-[#e58a43] font-bold flex items-center gap-2 justify-center">
            <ArrowLeft size={20} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen font-sans">

      {/* ════════════════════════════════════════
           1. PARALLAX HERO (Home Hero DNA)
         ════════════════════════════════════════ */}
      <section ref={parallaxRef} className="p-3 w-full">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black flex flex-col min-h-[85vh] md:min-h-[90vh]">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${service.image}")` }} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45 z-0 pointer-events-none" />

          {/* Center text */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 mt-8 md:mt-[-4rem] pb-44 md:pb-0 pointer-events-none w-full">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 0.7, y: 0 }} transition={{ delay: 0.15 }} className="text-[#e58a43] text-[13px] md:text-[15px] font-bold uppercase tracking-[0.25em] mb-3">
              Premium Catering
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-white font-semibold text-[3.25rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-4 md:mb-6 text-center selection:bg-white/20"
            >
              {service.title.split(' ').map((w, i) => (
                <span key={i}>{w}{i === 0 ? <br className="md:hidden" /> : ''}{' '}</span>
              ))}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.55 }} className="text-[#ebebeb] text-[13px] md:text-[15px] max-w-[280px] md:max-w-[480px] text-center font-medium leading-[1.6]">
              {extra.tagline}
            </motion.p>
          </div>

          {/* Glass card – bottom left */}
          <div className="absolute bottom-[90px] left-5 md:bottom-8 md:left-8 flex gap-2.5 md:gap-4 items-end z-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="bg-[#ffffff]/5 backdrop-blur-[24px] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 w-[160px] md:w-[240px]">
              <h3 className="text-white font-medium tracking-[-0.04em] text-[1.75rem] md:text-[2.5rem] mb-1.5 leading-none">
                25<span className="text-[1.25rem] md:text-[1.75rem]">+Yrs</span>
              </h3>
              <p className="text-white/70 text-[11px] md:text-[13.5px] font-medium leading-[1.5]">
                "Pure Indian" is exactly where we want to be. All in the name of authentic cuisine.
              </p>
            </motion.div>
          </div>

          {/* SVG cutout – bottom right */}
          <div className="absolute bottom-0 right-0 z-30">
            <div className="relative bg-gray-50 rounded-tl-[28px] md:rounded-tl-[34px] pt-[12px] pl-[12px] md:pt-[16px] md:pl-[16px]">
              <svg className="absolute bottom-full right-0 w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor"><path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" /></svg>
              <svg className="absolute bottom-0 right-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-50 pointer-events-none" viewBox="0 0 32 32" fill="currentColor"><path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" /></svg>
              <Link to="/contact" className="bg-white text-gray-900 px-[24px] py-[12px] md:px-[80px] md:py-[17px] rounded-full rounded-br-4xl border border-black/15 hover:bg-gray-100 transition-all pointer-events-auto block">
                <span className="font-medium text-[15px] md:text-[19px] tracking-[-0.02em] leading-none">Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           2. ANIMATED STATS MARQUEE (Aceternity style)
         ════════════════════════════════════════ */}
      <section className="w-full px-3 py-6 md:py-8">
        <div className="max-w-[1920px] mx-auto rounded-[2rem] md:rounded-4xl bg-white border border-gray-100 px-4 md:px-10 py-9 md:py-11">
          <div
            className="grid gap-y-9 gap-x-2 md:gap-x-4"
            style={{ gridTemplateColumns: `repeat(${extra.stats.length}, minmax(0, 1fr))` }}
          >
            {extra.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`flex flex-col items-center text-center px-1 md:px-2 ${idx !== 0 ? "md:border-l border-gray-100" : ""}`}
              >
                <CountUp
                  value={stat.value}
                  className="font-display text-gray-950 font-semibold text-[1.35rem] md:text-[2.75rem] tracking-[-0.02em] leading-none mb-2"
                />
                <p className="text-gray-500 text-[10.5px] md:text-[14px] font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           3. ABOUT / DESCRIPTION SECTION
         ════════════════════════════════════════ */}
      <section className="w-full px-3 py-10 md:py-16">
        <div className="max-w-[1920px] mx-auto flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-0">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-5 max-w-[580px]">
            <p className="text-gray-600 text-[16px] md:text-[19px] font-medium leading-[1.7]">
              {service.fullDescription}
            </p>
            <p className="text-gray-500 text-[14px] md:text-[16px] font-medium leading-[1.7]">
              {service.description}
            </p>
            <Link to="/services" className="text-[#e58a43] hover:text-[#d67b38] font-bold flex items-center gap-2 group transition-colors mt-2">
              <ArrowLeft size={18} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" /> All Services
            </Link>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
            About<br />This
          </motion.h2>
        </div>
      </section>

      {/* ════════════════════════════════════════
           4. FEATURES, DARK BENTO CARDS
         ════════════════════════════════════════ */}
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
            {service.features?.map((feature, idx) => {
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

      {/* ════════════════════════════════════════
           5. PROCESS, STAGGERED TIMELINE (Aceternity style)
         ════════════════════════════════════════ */}
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
            {extra.process.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative rounded-[2.5rem] md:rounded-4xl overflow-hidden bg-white border border-gray-100 p-8 md:p-12 group hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                {/* Step number watermark */}
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

      {/* ════════════════════════════════════════
           5.5 PHOTO GALLERY (Wedding / Sangeet / Corporate)
         ════════════════════════════════════════ */}
      <EventGallery defaultTab={id} />

      {/* ════════════════════════════════════════
           5.7 FAQ (per-service accordion)
         ════════════════════════════════════════ */}
      <FaqSection faqs={extra.faqs} />

      {/* ════════════════════════════════════════
           6. CTA BANNER (Dark rounded-4xl card)
         ════════════════════════════════════════ */}
      <section className="w-full px-3 pb-6">
        <div className="relative w-full rounded-4xl overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
          {/* Subtle radial glow */}
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
              <a href="tel:+911234567890" className="border border-white/20 text-white px-10 py-4 rounded-full font-medium text-[16px] md:text-[18px] tracking-[-0.02em] hover:bg-white/10 transition-all flex items-center gap-2 whitespace-nowrap">
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
