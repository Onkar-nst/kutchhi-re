import { motion } from "framer-motion";

export default function InitialLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
              transition={{
                scale: { duration: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" },
                opacity: { duration: 1 }
              }}
            >
              <img
                src="/logo.png"
                alt="Kutchhi Caterers Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-col items-center"
            >
              <h1 className="text-gray-900 font-black text-3xl md:text-5xl tracking-tighter uppercase">
                kutchhi<span className="text-[#e58a43]">.</span>caterers
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="h-[1px] bg-gray-200 mt-2 w-full"
              />
              <p className="text-gray-400 text-xs md:text-sm mt-3 tracking-[0.3em] uppercase font-medium">
                Established 1999
              </p>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden h-1 w-32 bg-gray-100 rounded-full"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 bg-[#e58a43]"
            />
          </motion.div>
    </motion.div>
  );
}
