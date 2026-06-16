import { Home, Utensils, Info, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Utensils },
    // { name: "Feed", path: "/instagram", icon: Instagram },
    { name: "Contact", path: "/contact", icon: PhoneCall },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-100 md:hidden">
      <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex justify-between items-center w-full">
        {navItems.map((item) => {
          const isActive = currentPath === item.path || (currentPath === "/about" && item.path === "/about"); // just to be safe

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative flex items-center justify-center h-13 rounded-full transition-all duration-500 ease-out shrink-0 ${
                isActive
                  ? "bg-[#e58a43] text-white px-6 flex-2 shadow-inner"
                  : "text-white/60 hover:text-white px-5 flex-1"
              }`}
            >
              <Icon 
                size={isActive ? 20 : 22} 
                strokeWidth={isActive ? 2.5 : 2} 
                className="shrink-0 relative z-10"
              />
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-out flex items-center ${
                  isActive ? "max-w-25 opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"
                }`}
              >
                {/* <span className="font-bold text-[14px] tracking-tight whitespace-nowrap">
                  {item.name}
                </span> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
