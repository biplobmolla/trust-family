"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface University {
  name: string;
  logo: string;
  images: string[];
  description: string;
  location: string;
  founded: string;
  students: string;
  website: string;
}

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-48 bg-gray-50 group">
      <Image
        src={images[currentIndex]}
        alt="University campus"
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const universities: University[] = [
  {
    name: "RUDN University",
    logo: "https://picsum.photos/200/200?random=1",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3",
    ],
    description:
      "One of the leading classical universities in Russia, offering a wide range of programs in various fields of study.",
    location: "Moscow, Russia",
    founded: "Established in 1960",
    students: "Over 30,000 students",
    website: "https://www.rudn.ru",
  },
  {
    name: "Sechenov University",
    logo: "https://picsum.photos/200/200?random=2",
    images: [
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3",
      "https://picsum.photos/600/400?random=4",
    ],
    description:
      "The first and leading medical university in Russia, known for its excellence in medical education and research.",
    location: "Moscow, Russia",
    founded: "Established in 1758",
    students: "Over 15,000 students",
    website: "https://www.sechenov.ru",
  },
  {
    name: "Bauman Moscow State Technical University",
    logo: "https://picsum.photos/200/200?random=3",
    images: [
      "https://picsum.photos/600/400?random=3",
      "https://picsum.photos/600/400?random=4",
      "https://picsum.photos/600/400?random=5",
    ],
    description:
      "One of the oldest and most prestigious technical universities in Russia, specializing in engineering and technology.",
    location: "Moscow, Russia",
    founded: "Established in 1830",
    students: "Over 20,000 students",
    website: "https://bmstu.ru",
  },
  {
    name: "Moscow Aviation Institute",
    logo: "https://picsum.photos/200/200?random=4",
    images: [
      "https://picsum.photos/600/400?random=4",
      "https://picsum.photos/600/400?random=5",
      "https://picsum.photos/600/400?random=6",
    ],
    description:
      "A leading university in aerospace engineering and related fields, with strong industry connections.",
    location: "Moscow, Russia",
    founded: "Established in 1930",
    students: "Over 22,000 students",
    website: "https://mai.ru",
  },
  {
    name: "Saint Petersburg State University",
    logo: "https://picsum.photos/200/200?random=5",
    images: [
      "https://picsum.photos/600/400?random=5",
      "https://picsum.photos/600/400?random=6",
      "https://picsum.photos/600/400?random=7",
    ],
    description:
      "One of the oldest and most prestigious universities in Russia, offering a wide range of academic programs.",
    location: "Saint Petersburg, Russia",
    founded: "Established in 1724",
    students: "Over 30,000 students",
    website: "https://spbu.ru",
  },
  {
    name: "Kazan Federal University",
    logo: "https://picsum.photos/200/200?random=6",
    images: [
      "https://picsum.photos/600/400?random=6",
      "https://picsum.photos/600/400?random=7",
      "https://picsum.photos/600/400?random=8",
    ],
    description:
      "One of the oldest universities in Russia, known for its strong research programs and international collaborations.",
    location: "Kazan, Russia",
    founded: "Established in 1804",
    students: "Over 45,000 students",
    website: "https://kpfu.ru",
  },
  {
    name: "Moscow State University",
    logo: "https://picsum.photos/200/200?random=7",
    images: [
      "https://picsum.photos/600/400?random=7",
      "https://picsum.photos/600/400?random=8",
      "https://picsum.photos/600/400?random=9",
    ],
    description:
      "Russia's oldest and most prestigious university, consistently ranked among the top universities in the world.",
    location: "Moscow, Russia",
    founded: "Established in 1755",
    students: "Over 40,000 students",
    website: "https://www.msu.ru",
  },
  {
    name: "Novosibirsk State University",
    logo: "https://picsum.photos/200/200?random=8",
    images: [
      "https://picsum.photos/600/400?random=8",
      "https://picsum.photos/600/400?random=9",
      "https://picsum.photos/600/400?random=10",
    ],
    description:
      "A leading research university in Siberia, known for its strong programs in natural sciences and mathematics.",
    location: "Novosibirsk, Russia",
    founded: "Established in 1959",
    students: "Over 7,000 students",
    website: "https://www.nsu.ru",
  },
  {
    name: "Tomsk State University",
    logo: "https://picsum.photos/200/200?random=9",
    images: [
      "https://picsum.photos/600/400?random=9",
      "https://picsum.photos/600/400?random=10",
      "https://picsum.photos/600/400?random=11",
    ],
    description:
      "The oldest university in Siberia, offering comprehensive education in various fields of study.",
    location: "Tomsk, Russia",
    founded: "Established in 1878",
    students: "Over 23,000 students",
    website: "https://www.tsu.ru",
  },
  {
    name: "Ural Federal University",
    logo: "https://picsum.photos/200/200?random=10",
    images: [
      "https://picsum.photos/600/400?random=10",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
    description:
      "One of the largest universities in Russia, known for its engineering and technical programs.",
    location: "Yekaterinburg, Russia",
    founded: "Established in 1920",
    students: "Over 35,000 students",
    website: "https://urfu.ru",
  },
  {
    name: "Far Eastern Federal University",
    logo: "https://picsum.photos/200/200?random=11",
    images: [
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
      "https://picsum.photos/600/400?random=13",
    ],
    description:
      "A leading university in the Russian Far East, offering diverse programs with a focus on Asia-Pacific studies.",
    location: "Vladivostok, Russia",
    founded: "Established in 1899",
    students: "Over 24,000 students",
    website: "https://www.dvfu.ru",
  },
  {
    name: "National Research Nuclear University MEPhI",
    logo: "https://picsum.photos/200/200?random=12",
    images: [
      "https://picsum.photos/600/400?random=12",
      "https://picsum.photos/600/400?random=13",
      "https://picsum.photos/600/400?random=14",
    ],
    description:
      "A leading university in nuclear science and technology, offering specialized programs in physics and engineering.",
    location: "Moscow, Russia",
    founded: "Established in 1942",
    students: "Over 8,000 students",
    website: "https://mephi.ru",
  },
];

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Partner Universities
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-200 text-center">
              We partner with prestigious Russian universities to provide you
              with world-class education opportunities. Each institution offers
              unique programs and facilities to help you achieve your academic
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <ImageSlider images={university.images} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-blue-100 bg-white p-1">
                      <Image
                        src={university.logo}
                        alt={`${university.name} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {university.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">{university.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {university.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      {university.founded}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      {university.students}
                    </div>
                  </div>
                  <Link
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Visit Website
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
