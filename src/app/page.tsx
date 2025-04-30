import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-blue-700 text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Partner Universities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with prestigious Russian universities to provide you
              with world-class education opportunities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {universities.map((university, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-3 transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200"
              >
                <div className="w-48 h-48 relative mb-2 p-1 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                  <Image
                    src={university.logo}
                    alt={university.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center text-gray-800 font-medium group-hover:text-blue-700 transition-colors duration-300 text-lg">
                  {university.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/universities"
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View All Universities
            </Link>
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Find out about our extra services...
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We provide comprehensive support to make your study journey in
              Russia smooth and successful
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extraServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={service.link}
                      className="inline-flex items-center bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300 font-medium group-hover:translate-x-2"
                    >
                      {service.buttonText}
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl group"
            >
              Explore All Services
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Student Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our students about their experiences studying in Russia
            </p>
          </div>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                We&apos;re here to help you start your educational journey in
                Russia. Fill out the form below and we&apos;ll get back to you
                within 24 hours.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Country *
                    </label>
                    <select
                      id="country"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="program"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Program of Interest *
                  </label>
                  <select
                    id="program"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="medicine">Medicine</option>
                    <option value="engineering">Engineering</option>
                    <option value="business">Business</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your educational goals and any questions you have"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="ml-2 text-sm text-gray-600"
                  >
                    I agree to the privacy policy and terms of service
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop",
  },
  {
    name: "Sechenov University",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop",
  },
  {
    name: "Russian State University",
    logo: "https://picsum.photos/200/200?random=1",
  },
  {
    name: "Moscow Aviation Institute",
    logo: "https://picsum.photos/200/200?random=2",
  },
  {
    name: "Bauman Technical University",
    logo: "https://picsum.photos/200/200?random=3",
  },
  {
    name: "Russian Biotechnological University",
    logo: "https://picsum.photos/200/200?random=4",
  },
  {
    name: "Pirogov Medical University",
    logo: "https://picsum.photos/200/200?random=5",
  },
  {
    name: "St. Petersburg Polytechnic",
    logo: "https://picsum.photos/200/200?random=6",
  },
  {
    name: "Saint Petersburg State University",
    logo: "https://picsum.photos/200/200?random=7",
  },
  {
    name: "Kazan Federal University",
    logo: "https://picsum.photos/200/200?random=8",
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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;Living abroad has its own responsibilities and liability. If it is accompanied with quality studying, of course the responsibilities are immense. Nonetheless with Trust Family&apos;s faithful support, numerous circumstances were effectively resolved for me.&rdquo;`,
    name: "Hosna Pourhosseingholi",
    university: "Graduate of Sechenov University (Dentistry)",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;I studied in MMA from 2001-2007, in English medium. I was a holder of the Red diploma. I am very pleased to be a part of the MMA, a medical school that gave me not just one of the best medical education, but a lot more in terms of learning a new language, meeting a whole new culture, beautiful Moscow.&rdquo;`,
    name: "Dr. Sneha Raj",
    university: "Graduate of Sechenov University (Pediatrics)",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;The support from Trust Family was exceptional throughout my studies. They helped me with everything from admission to accommodation, making my transition to studying in Russia smooth and stress-free.&rdquo;`,
    name: "Ahmed Hassan",
    university: "Graduate of RUDN University (Engineering)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd6888f2d?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;Studying in Russia was a life-changing experience, and Trust Family made it possible. Their guidance and support were invaluable in helping me achieve my academic goals.&rdquo;`,
    name: "Maria Garcia",
    university: "Graduate of Bauman Technical University (Computer Science)",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;The quality of education I received in Russia exceeded my expectations. Trust Family's assistance in choosing the right university and program was crucial to my success.&rdquo;`,
    name: "John Smith",
    university: "Graduate of Moscow Aviation Institute (Aerospace Engineering)",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;I am grateful to Trust Family for their continuous support during my studies. They were always there to help with any challenges I faced, making my educational journey much easier.&rdquo;`,
    name: "Fatima Al-Mansoori",
    university: "Graduate of Pirogov Medical University (Medicine)",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop",
  },
  {
    quote: `&ldquo;The cultural experience of studying in Russia was amazing, and Trust Family helped me adapt quickly. Their support in handling all the necessary paperwork was invaluable.&rdquo;`,
    name: "Chen Wei",
    university:
      "Graduate of Saint Petersburg State University (International Relations)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  },
];
