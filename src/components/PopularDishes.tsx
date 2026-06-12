import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { popularDishesData } from '../data';

export default function PopularDishes() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 w-full px-3 sm:px-4 md:px-5 lg:px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black p-8 md:p-12 lg:p-16 flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10 w-full">
          <div>
            <h4 className="text-[#e58a43] font-bold tracking-widest uppercase text-sm mb-2">Offer Zone</h4>
            <h2 className="text-white font-semibold text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.02em]">
              popular cuisines
            </h2>
          </div>
          <Link to="/menu" className="bg-white text-gray-950 px-[24px] py-[14px] md:px-[36px] md:py-[18px] rounded-full flex items-center justify-center border border-transparent hover:bg-gray-200 transition-colors pointer-events-auto">
            <span className="font-semibold text-[16px] md:text-[18px] tracking-[-0.01em] leading-none">View Full Menu</span>
          </Link>
        </div>

        {/* Horizontal Scroll Grid */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory pt-4">
          {popularDishesData.map((dish, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/menu/' + dish.name.toLowerCase().replace(' ', '-'))}
              className="relative w-[260px] md:w-[340px] h-[360px] md:h-[480px] shrink-0 snap-center rounded-4xl overflow-hidden group cursor-pointer bg-gray-900 border border-white/10"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                style={{ backgroundImage: `url(${dish.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0"></div>

              {/* Hover effect arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black group-hover:-rotate-45 transition-all duration-300">
                <ArrowRight strokeWidth={2} size={20} />
              </div>

              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#ffffff]/10 backdrop-blur-[24px] border border-white/10 p-5 rounded-[1.5rem]">
                <h3 className="text-white font-bold text-[1.5rem] md:text-[2rem] tracking-tight leading-none text-center">
                  {dish.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
