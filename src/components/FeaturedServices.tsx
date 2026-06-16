import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data";

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
  span: string;
  index: number;
}

const ServiceCard = ({ title, image, link, span, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`${span} w-[82%] sm:w-[55%] md:w-auto shrink-0 md:shrink snap-start h-[230px] sm:h-[240px] lg:h-[280px]`}
    >
      <Link
        to={link}
        className="group relative block w-full h-full rounded-3xl lg:rounded-4xl overflow-hidden bg-gray-900"
      >
        {/* Image fills the card */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5 group-hover:from-black/80 transition-colors duration-500" />

        {/* Circular arrow, top right */}
        <div className="absolute top-5 right-5 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:-rotate-45 transition-all duration-300">
          <ArrowUpRight size={20} strokeWidth={2} />
        </div>

        {/* Title, bottom left */}
        <h3 className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 text-white font-bold text-[1.75rem] md:text-[2.5rem] tracking-[-0.02em] leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
};

export default function FeaturedServices() {
  // Bento layout, Wedding & Corporate are the two wide "hero" cards (equal attention).
  const layout = [
    { id: "corporate", span: "md:col-span-7" },
    { id: "sangeet", span: "md:col-span-5" },
    { id: "buffet", span: "md:col-span-5" },
    { id: "wedding", span: "md:col-span-7" },
  ];

  const cards = layout
    .map((l) => {
      const service = servicesData.find((s) => s.id === l.id);
      return service ? { ...service, span: l.span } : null;
    })
    .filter(Boolean) as (typeof servicesData[number] & { span: string })[];

  return (
    <section className="bg-gray-50 w-full px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-10 md:gap-16">

        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-[1.6]">
              The finest of India's cuisine is as rich and diverse as its civilization, an art form passed down through generations.
            </p>
            <Link to="/services" className="text-[#e58a43] hover:text-[#d67b38] font-bold flex items-center gap-2 group transition-colors">
              View All Services <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <h2 className="text-gray-950 font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[0.95] tracking-[-0.02em] text-left md:text-right">
            Our Services
          </h2>
        </div>

        {/* Peeking carousel on mobile, 12-col bento on desktop */}
        <div className="flex md:grid md:grid-cols-12 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mr-4 pr-4 md:mr-0 md:pr-0 scroll-pl-1">
          {cards.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              link={service.link}
              span={service.span}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
