import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import PopularDishes2 from "../components/PopularDishes2"
import SocialMedia from "../components/SocialMedia"
import ContactForm from "../components/ContactForm"


function Home() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Hero/>
      <FeaturedServices />
      <PopularDishes2 />
      <SocialMedia />
      <ContactForm />
    </div>
  )
}

export default Home