import { Play } from "lucide-react";

export default function AboutVideo() {
  return (
    <section className="bg-gray-50 w-full px-3 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] relative aspect-video rounded-4xl  overflow-hidden bg-black shadow-2xl group cursor-pointer">
        
        {/* Video Thumbnail / Placeholder */}
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=80" 
          alt="Culinary Video Showcase" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        
        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative">
            <div className="absolute -inset-8 bg-[#7A1A1A] rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <Play className="text-[#7A1A1A] w-8 h-8 md:w-12 md:h-12 fill-current ml-2" />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-12 left-12 right-12 z-20 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Cinematic Showcase
            </span>
            <h2 className="text-white font-semibold text-[2.2rem] md:text-[3.5rem] leading-none tracking-[-0.02em]">
              experience <br/> our craft
            </h2>
          </div>
          
          <div className="max-w-[300px] text-right hidden md:block">
            <p className="text-white/60 font-medium text-sm leading-relaxed">
              Step into our kitchen where passion meets tradition. A visual journey of the scents, tastes, and smiles we create every single day.
            </p>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-12 left-12 z-20 hidden md:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#e58a43]"></div>
            <span className="text-white/40 font-bold text-xs tracking-widest uppercase">Since 1999</span>
          </div>
        </div>
      </div>
    </section>
  );
}
