import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Trust Family
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/universities"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Universities
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
