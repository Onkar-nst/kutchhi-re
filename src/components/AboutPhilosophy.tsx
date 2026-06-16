import { Quote } from "lucide-react";

export default function AboutPhilosophy() {
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-black text-white relative shadow-2xl">
        
        {/* Background Accent */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585932231552-198d751b0b2e?auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

        <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Philosophy Text */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[#e58a43] font-bold tracking-[0.2em] text-sm uppercase">Our Philosophy</span>
              <h2 className="text-white font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.85] tracking-[-0.04em]">
                about <br/> kutchhicaterers
              </h2>
            </div>

            <div className="w-24 h-2 bg-[#7A1A1A] rounded-full"></div>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 text-[#7A1A1A]/30 w-16 h-16" />
              <p className="text-white/90 font-display text-xl md:text-2xl leading-relaxed max-w-3xl border-l-4 border-[#e58a43] pl-8 py-2">
                "Each country has its own kind of food and taste to offer. India has a very variety of dishes and the hospitality of the Indians is legendary. In Sanskrit Literature the three famous words 'Atithi Devo Bhava' or 'the guest is truly our god' are a dictum of hospitality in India."
              </p>
            </div>

            <p className="text-white/70 text-[15px] md:text-[17px] font-medium leading-[1.8] max-w-2xl">
              The finest of India's cuisine is as rich and diverse as it's civilization. It is an art form that has been passed on through generations purely by word of mouth, from guru(teacher) to vidhyarthi(pupil) or from mother to daughter. The range assumes astonishing proportions when one takes into account regional variations. Very often the taste, color, aroma and appearance of the same delicacy changes from state to state. 
              <br/><br/>
              Food customarily forms the crowning part of most festivals and celebrations. Whatever the occasion is Indians eat with great gusto and are always looking for reasons to feast and make merry. At traditional and festive meals, the thali (plate) or banana leaf is decorated with rangoli (a design drawn with white and colored powders around the edges). Thus keeping the same tradition alive, we at Kutchhi Caterers have been serving our guests for the past 25 years.
            </p>
          </div>

          {/* Right: Visual Accent Card */}
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#7A1A1A] to-[#e58a43] rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-4 shadow-2xl overflow-hidden w-[400px] aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1544126592-807daf21565c?auto=format&fit=crop&w=800&q=80" 
                  alt="Indian Hospitality" 
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[#e58a43] font-bold text-sm tracking-widest uppercase block mb-2">Heritage</span>
                  <p className="text-white font-bold text-xl tracking-tight">Pure Indian Traditions Passed Through Generations</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
