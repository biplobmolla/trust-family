"use client";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "University Admission",
    description:
      "Comprehensive support for university applications in Russia, including document preparation and submission.",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    features: [
      "University selection guidance",
      "Application form assistance",
      "Document translation services",
      "Admission letter processing",
      "Interview preparation",
    ],
  },
  {
    title: "Student Visa Support",
    description:
      "Expert guidance through the Russian student visa application process and requirements.",
    icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
    features: [
      "Visa application assistance",
      "Document checklist preparation",
      "Invitation letter processing",
      "Visa interview guidance",
      "Post-arrival registration support",
    ],
  },
  {
    title: "Work Visa & Employment Support",
    description:
      "Comprehensive assistance for obtaining work visas and finding employment opportunities in Russia.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    features: [
      "Work visa application support",
      "Employment contract assistance",
      "Job search and placement",
      "Work permit processing",
      "Legal compliance guidance",
      "Employer documentation support",
    ],
  },
  {
    title: "Accommodation",
    description:
      "Assistance in finding suitable accommodation options near your chosen university.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    features: [
      "University dormitory booking",
      "Private accommodation options",
      "Rental agreement assistance",
      "Location guidance",
      "Safety and security advice",
    ],
  },
  {
    title: "Pre-Arrival Support",
    description:
      "Comprehensive preparation services before your arrival in Russia.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    features: [
      "Travel arrangements",
      "Airport pickup service",
      "Orientation program",
      "Cultural adaptation guidance",
      "Emergency contact setup",
    ],
  },
  {
    title: "Academic Support",
    description:
      "Ongoing academic assistance throughout your studies in Russia.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    features: [
      "Course registration assistance",
      "Academic counseling",
      "Language support",
      "Study materials guidance",
      "Exam preparation help",
    ],
  },
  {
    title: "Post-Graduation Support",
    description:
      "Guidance and assistance for career opportunities after graduation.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    features: [
      "Career counseling",
      "Job placement assistance",
      "Internship opportunities",
      "Work permit guidance",
      "Alumni network access",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Our Services
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-200 text-center">
              We provide comprehensive support throughout your educational
              journey in Russia, from application to graduation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mt-1">{service.description}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can
            help you achieve your educational goals in Russia.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
