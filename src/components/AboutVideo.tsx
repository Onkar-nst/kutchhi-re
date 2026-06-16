import { useState } from "react";
import { Play } from "lucide-react";
import { aboutShowcaseVideo, youtubeShortId } from "../data";

export default function AboutVideo() {
  const [playing, setPlaying] = useState(false);
  const videoId = youtubeShortId(aboutShowcaseVideo);

  if (playing && videoId) {
    return (
      <section className="bg-gray-50 w-full px-4 md:px-6 lg:px-8 pb-16 md:pb-24 flex flex-col items-center">
        <div className="w-full max-w-[1920px] relative aspect-[4/5] sm:aspect-video rounded-4xl overflow-hidden bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
            title="Cinematic Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 w-full px-4 md:px-6 lg:px-8 pb-16 md:pb-24 flex flex-col items-center">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label="Play showcase video"
        className="w-full max-w-[1920px] relative aspect-[4/5] sm:aspect-video rounded-4xl  overflow-hidden bg-black shadow-2xl group cursor-pointer block text-left"
      >

        {/* Top badge — mobile only (desktop shows it bottom-left) */}
        <div className="absolute top-6 left-6 right-6 z-20 md:hidden flex justify-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 font-bold text-xs tracking-[0.2em] uppercase">
            Cinematic Showcase
          </span>
        </div>
        
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
          <div className="hidden md:flex flex-col gap-4">
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
      </button>
    </section>
  );
}
