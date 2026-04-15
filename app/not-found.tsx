import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black mt-40">
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Spiral gradient background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] relative">
            <div className="absolute inset-0 bg-gradient-conic from-[#F8C8DC] via-transparent to-[#F8C8DC] opacity-15 blur-3xl animate-spin-slow" />
            <div className="absolute inset-[15%] bg-gradient-conic from-[#F8C8DC] via-transparent to-[#F8C8DC] opacity-10 blur-2xl animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none">
              <span className="text-[#F8C8DC]">4</span>
              <span className="text-[#F8C8DC]">0</span>
              <span className="text-[#F8C8DC]">4</span>
            </h1>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 pb-30 border-t border-[#2A2A2A]">
            <p className="text-gray-500 text-sm mb-4">Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-[#F8C8DC] hover:text-white transition text-sm">
                Services
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/gallery" className="text-[#F8C8DC] hover:text-white transition text-sm">
                Gallery
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/about" className="text-[#F8C8DC] hover:text-white transition text-sm">
                About Us
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/contact" className="text-[#F8C8DC] hover:text-white transition text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}