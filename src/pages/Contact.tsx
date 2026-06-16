import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* SubHero for Contact Page */}
      <section>
        <div className="bg-gray-50 p-3 w-full flex flex-col items-center">
          <div className="relative w-full max-w-[1920px] rounded-4xl overflow-hidden bg-black shadow-2xl flex flex-col min-h-[70vh] md:min-h-[80vh]">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0 pointer-events-none" />

            <div className="relative z-10 px-4 w-full flex-1 flex flex-col justify-center items-center text-center">
              <h1 className="text-white font-semibold text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[0.9] tracking-[-0.02em] mb-4">
                contact us
              </h1>
              <p className="text-white/80 font-medium text-[15px] md:text-[18px] max-w-2xl px-4">
                Have an event in mind? We'd love to hear from you. Our team is ready to bring the flavor of Kutch to your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactForm />

      {/* Visit our central kitchen — heading + full-width map */}
      <div className="w-full px-3 pb-16 md:pb-24 flex flex-col items-center">
        <div className="w-full max-w-[1920px] flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2 md:px-2">
            <div className="flex flex-col gap-4 max-w-md text-center md:text-left">
              <h2 className="text-gray-950 font-black text-3xl md:text-4xl tracking-tight">Visit our central kitchen</h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Experience the magic where our chefs create these masterpieces. We maintain the highest standards of hygiene and tradition.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+No.+103%2C+Laxmi+Narayan+Ln%2C+Opp.+Rambaug+Hall%2C+Matunga%2C+Mumbai+400019"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-full font-bold text-center hover:bg-gray-900 transition-colors shadow-xl whitespace-nowrap self-center md:self-auto"
            >
              Get Directions
            </a>
          </div>

          {/* Full-width embedded Google Map */}
          <div className="w-full rounded-4xl overflow-hidden border border-black/5 shadow-xl bg-gray-100">
            <iframe
              title="Kutchhi Caterers location"
              src="https://www.google.com/maps?q=Plot%20No.%20103%2C%20Laxmi%20Narayan%20Ln%2C%20Opp.%20Rambaug%20Hall%2C%20Matunga%2C%20Mumbai%20400019&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-[360px] md:h-[480px] block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
