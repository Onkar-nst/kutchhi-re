
import { Send, MapPin, Phone, Clock, ChevronDown } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-480 rounded-4xl overflow-hidden bg-white border border-black/5 p-4 md:p-8 lg:p-12 flex flex-col gap-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          
          {/* Left Side: Image / Value Prop */}
          <div className="relative rounded-4xl overflow-hidden bg-black p-8 md:p-12 flex flex-col justify-end min-h-100 lg:min-h-150 border border-black/10">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80")' }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 font-bold text-sm tracking-wide mb-4 border border-white/20">
                Book Us
              </span>
              <h2 className="text-white font-semibold text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.02em] mb-4">
                your dream <br/> event
              </h2>
              <p className="text-white/80 font-medium text-[15px] md:text-[17px] max-w-md leading-relaxed">
                Where you want our services, we deliver. Pure Indian cuisine that guarantees satisfaction. Fill out the form and our expert chefs will take care of the rest.
              </p>
            </div>
          </div>

          {/* Right Side: Form Bento */}
          <div className="bg-gray-50 rounded-4xl p-6 md:p-10 lg:p-14 flex flex-col gap-8 justify-center border border-black/5">
            <h3 className="text-gray-950 font-bold text-[2rem] md:text-[3rem] tracking-tight leading-none">
              Get Free Quote
            </h3>
            
            <div className="flex flex-col gap-5">
              {/* Row 1 — City */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Enter your city</label>
                <input
                  type="text"
                  placeholder="Mumbai, Maharashtra"
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-lg placeholder:text-gray-300 shadow-sm"
                />
              </div>

              {/* Row 2 — Contact No. + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Contact No.</label>
                  <input
                    type="tel"
                    placeholder="+91 989 213 4834"
                    className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-lg placeholder:text-gray-300 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Enter Your Email</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-lg placeholder:text-gray-300 shadow-sm"
                  />
                </div>
              </div>

              {/* Row 3 — Event Date + Event Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Event Date</label>
                  <input
                    type="date"
                    className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-950 font-medium text-[17px] shadow-sm appearance-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 font-bold text-sm ml-4 uppercase tracking-wide">Type of Event</label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 pr-12 outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all font-medium text-lg shadow-sm appearance-none cursor-pointer text-gray-950 invalid:text-gray-300"
                      required
                    >
                      <option value="" disabled>Select event type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="sangeet">Sangeet</option>
                      <option value="buffet">Buffet Catering</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <button className="mt-4 bg-gray-950 hover:bg-gray-800 text-white px-8 py-5 rounded-full flex items-center justify-center gap-3 transition-colors shadow-xl group">
                <span className="font-semibold text-[18px] md:text-[20px] tracking-tight">Send Request</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Small Info Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No.+103%2C+Laxmi+Narayan+Ln%2C+Opp.+Rambaug+Hall%2C+Matunga%2C+Mumbai+400019"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-black/5 hover:bg-gray-100 hover:border-[#e58a43]/30 transition-colors group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e58a43] group-hover:bg-[#e58a43] group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <p className="text-gray-900 font-black text-[15px]">Plot No. 103, Laxmi Narayan Ln, Opp. Rambaug Hall, Matunga, Mumbai 400019</p>
            <span className="text-[#e58a43] font-bold text-[12px] uppercase tracking-wide">Get Directions →</span>
          </a>
          <a
            href="tel:+919892134834"
            className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-black/5 hover:bg-gray-100 hover:border-[#e58a43]/30 transition-colors group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e58a43] group-hover:bg-[#e58a43] group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <p className="text-gray-900 font-black text-[15px] tracking-tighter">(+91) 9892134834</p>
            <span className="text-[#e58a43] font-bold text-[12px] uppercase tracking-wide">Tap to Call →</span>
          </a>
          <div className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-black/5 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#e58a43]">
              <Clock size={24} />
            </div>
            <p className="text-gray-900 font-black text-[15px]">24/7 Hours</p>
            <span className="text-gray-900 font-black text-[15px] uppercase">Service Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
