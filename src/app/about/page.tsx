import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            About Us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-200 text-center">
              Trust Family was founded with the kind intention of helping
              international students to get admission in different renowned
              Russian universities. Our mission is to constantly provide support
              and assistance to international students in their pathway of
              pursuing higher education in Russia.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Founder & CEO
              </h2>
              <h3 className="text-2xl text-blue-800 font-semibold">
                John Smith
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-lg leading-relaxed">
                  With over 20 years of experience in international education,
                  our founder has dedicated his career to helping students
                  achieve their academic dreams in Russia. His vision and
                  leadership have helped thousands of students from around the
                  world successfully navigate their educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-800 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Office Address
                </h3>
                <p className="text-gray-600">
                  Ulitsa Usacheva 62/2
                  <br />
                  Moscow, Russia
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Details
                </h3>
                <p className="text-gray-600">
                  Phone: (+7) 123 456-7890
                  <br />
                  Email: info@trustfamily.com
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Deputy General Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    description:
      "With extensive experience in international education, Sarah oversees our operations and ensures the highest quality of service.",
  },
  {
    name: "Michael Chen",
    position: "Business Development Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd6888f2d?w=500&h=500&fit=crop",
    description:
      "Michael leads our business development initiatives and strategic partnerships with universities across Russia.",
  },
  {
    name: "Emma Wilson",
    position: "Manager of Admissions Affairs",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
    description:
      "Emma manages all admission processes and ensures smooth transitions for our students.",
  },
  {
    name: "David Brown",
    position: "Social Media Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    description:
      "David handles our social media presence and student engagement across various platforms.",
  },
  {
    name: "Lisa Anderson",
    position: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&h=500&fit=crop",
    description:
      "Lisa develops and implements our marketing strategies to reach potential students worldwide.",
  },
  {
    name: "Robert Taylor",
    position: "Admission Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    description:
      "Robert manages the admission process and provides guidance to students throughout their application journey.",
  },
];
