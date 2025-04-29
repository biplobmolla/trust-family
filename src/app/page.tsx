import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Trust Family
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your trusted partner in education and career development
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Partner Universities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {universities.map((university, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={university.logo}
                    alt={university.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center text-gray-900 font-medium">
                  {university.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Find out about our extra services...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {extraServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300"
                >
                  {service.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Student Testimonials
          </h2>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl mb-8">
              We&apos;ll help you enter any Russian University!
            </p>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: "🎓",
    title: "Free Consultation",
    description:
      "Our team provides the legal knowledge and experience you need, saving time and avoiding common mistakes.",
  },
  {
    icon: "🏫",
    title: "University Selection",
    description:
      "Professional guidance in choosing the right university and program for your educational goals.",
  },
  {
    icon: "📄",
    title: "Document Preparation",
    description:
      "Expert assistance in preparing and translating all necessary documents for your application.",
  },
  {
    icon: "✉️",
    title: "Admission Assistance",
    description:
      "Comprehensive support throughout the admission process with fair and transparent pricing.",
  },
  {
    icon: "📝",
    title: "Invitation Letter",
    description:
      "Official registration and invitation letter processing from Russian Immigration Department.",
  },
  {
    icon: "✈️",
    title: "Airport Pickup",
    description:
      "Reliable airport reception service and transportation to your accommodation.",
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description:
      "Medical examination and insurance coverage for university dormitory acceptance.",
  },
  {
    icon: "🏠",
    title: "Accommodation & Trips",
    description:
      "Assistance with temporary residence and city orientation services.",
  },
];

const universities = [
  {
    name: "RUDN University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=RUDN",
  },
  {
    name: "Sechenov University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=Sechenov",
  },
  {
    name: "Russian State University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=RSU",
  },
  {
    name: "Moscow Aviation Institute",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=MAI",
  },
  {
    name: "Bauman Technical University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=Bauman",
  },
  {
    name: "Russian Biotechnological University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=RBTU",
  },
  {
    name: "Pirogov Medical University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=Pirogov",
  },
  {
    name: "St. Petersburg Polytechnic",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=SPbPU",
  },
  {
    name: "Saint Petersburg State University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=SPbU",
  },
  {
    name: "Kazan Federal University",
    logo: "https://placehold.co/200x200/2563eb/ffffff?text=KFU",
  },
];

const extraServices = [
  {
    title: "Hostels",
    description:
      "We assist our students by helping them find accommodation in our dorms or university hostels. All located at a suitable distance from the University Campus, fully furnished, equipped with WiFi. The residence consists of blocks of two comfortable double or triple rooms with a bathroom and toilet. There is a separate kitchen on every floor. Students living in the residence are provided with the necessary furniture, as well as linen.",
    buttonText: "BOOK YOUR PLACE",
    link: "/hostels",
  },
  {
    title: "Virtual Fairs",
    description:
      "Virtual Educational Fairs dedicated to Russian Higher Education and Leading Russian Universities. The online event is held on an easy-to-use platform, where you can find information about degree programs and chat live with representatives of universities. There are programs for students and graduates that allow them to gain practical experience by interacting with industry enterprises during their studies.",
    buttonText: "BOOK FREE TICKET",
    link: "/virtual-fairs",
  },
];

const testimonials = [
  {
    quote: `&ldquo;Ever since the first day I arrived in Moscow in 2018, it was your reputable company that helped me to select the excellent university, and to fulfill my dream, and supported all its precious students with full responsibility during our education journey.&rdquo;`,
    name: "Elmira Asadi",
    university: "Graduate of Sechenov University (Dentistry)",
  },
  {
    quote: `&ldquo;Living abroad has its own responsibilities and liability. If it is accompanied with quality studying, of course the responsibilities are immense. Nonetheless with Trust Family&apos;s faithful support, numerous circumstances were effectively resolved for me.&rdquo;`,
    name: "Hosna Pourhosseingholi",
    university: "Graduate of Sechenov University (Dentistry)",
  },
  {
    quote: `&ldquo;I studied in MMA from 2001-2007, in English medium. I was a holder of the Red diploma. I am very pleased to be a part of the MMA, a medical school that gave me not just one of the best medical education, but a lot more in terms of learning a new language, meeting a whole new culture, beautiful Moscow.&rdquo;`,
    name: "Dr. Sneha Raj",
    university: "Graduate of Sechenov University (Pediatrics)",
  },
  {
    quote: `&ldquo;The support from Trust Family was exceptional throughout my studies. They helped me with everything from admission to accommodation, making my transition to studying in Russia smooth and stress-free.&rdquo;`,
    name: "Ahmed Hassan",
    university: "Graduate of RUDN University (Engineering)",
  },
  {
    quote: `&ldquo;Studying in Russia was a life-changing experience, and Trust Family made it possible. Their guidance and support were invaluable in helping me achieve my academic goals.&rdquo;`,
    name: "Maria Garcia",
    university: "Graduate of Bauman Technical University (Computer Science)",
  },
  {
    quote: `&ldquo;The quality of education I received in Russia exceeded my expectations. Trust Family's assistance in choosing the right university and program was crucial to my success.&rdquo;`,
    name: "John Smith",
    university: "Graduate of Moscow Aviation Institute (Aerospace Engineering)",
  },
  {
    quote: `&ldquo;I am grateful to Trust Family for their continuous support during my studies. They were always there to help with any challenges I faced, making my educational journey much easier.&rdquo;`,
    name: "Fatima Al-Mansoori",
    university: "Graduate of Pirogov Medical University (Medicine)",
  },
  {
    quote: `&ldquo;The cultural experience of studying in Russia was amazing, and Trust Family helped me adapt quickly. Their support in handling all the necessary paperwork was invaluable.&rdquo;`,
    name: "Chen Wei",
    university:
      "Graduate of Saint Petersburg State University (International Relations)",
  },
];
