import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen p-3 flex justify-center">
      
      {/* MAIN CONTAINER */}
      <div className="relative w-full rounded-4xl overflow-hidden bg-black">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2070&q=80")',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          
          {/* Small Text */}
          <p className="text-white/80 text-[16px] md:text-[18px] mb-4 tracking-tight">
            404 here is nothing here.
          </p>

          {/* Big Heading */}
          <h1 className="text-white font-semibold leading-[0.9] tracking-[-0.02em]
            text-[60px] sm:text-[90px] md:text-[130px] lg:text-[160px]">
            oops...
          </h1>

          {/* Button */}
          <Link
            to="/"
            className="
              mt-8
              border border-white/30
              text-white
              px-[28px] py-[12px]
              rounded-full
              backdrop-blur-md
              bg-white/5
              hover: bg-white
              transition-all
              text-[14px] md:text-[16px]
            "
          >
            Back Home
          </Link>
        </div>


      </div>
    </div>
  );
}