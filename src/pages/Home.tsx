import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import PopularDishes2 from "../components/PopularDishes2"
import SocialMedia from "../components/SocialMedia"
import ContactForm from "../components/ContactForm"
import InitialLoader from "../components/InitialLoader"


function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for a fixed duration for that premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <InitialLoader />}
      </AnimatePresence>
      <div className={`bg-gray-50 flex flex-col min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero/>
        <FeaturedServices />
        <PopularDishes2 />
        <SocialMedia />
        <ContactForm />
      </div>
    </>
  )
}

export default Home