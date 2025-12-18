"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Review {
  name: string
  role: string
  iconColor: string
  text: string
  rating: number
  time?: number
  relativeTime?: string
  photoUrl?: string
}

// Fallback static reviews (used if API fails)
const FALLBACK_REVIEWS: Review[] = [
  {
    name: "Bala Murugan",
    role: "Google Review",
    iconColor: "#53675C",
    text: "I visited Anaplak Art and Glam Salon for a haircut, and I was styled by Vignesh, their senior stylist. He did an excellent job, understood exactly what I wanted, and the final result was perfect. The staff members were very friendly, polite, and professional. The salon's atmosphere is clean, classy, and gives a very royal vibe.",
    rating: 5,
  },
  {
    name: "Lokesh R",
    role: "Google Review",
    iconColor: "#C8AFAE",
    text: "Just got an amazing haircut at Anaplak Art And Glam Salon and I'm loving it! The stylist was super skilled and listened to exactly what I wanted. The vibe was chill, and I felt totally at ease. Left feeling fresh and confident - thanks to the awesome team!",
    rating: 5,
  },
  {
    name: "Ajay Thenneti",
    role: "Google Review",
    iconColor: "#8B9A8E",
    text: "The salon ambience was outstanding—clean, well-organized, and beautifully designed. The lighting was soft and relaxing, the seating was comfortable, and the entire space felt fresh and welcoming. The moment I walked in, I felt calm and taken care of.",
    rating: 5,
  },
  {
    name: "Anand V",
    role: "Google Review",
    iconColor: "#A68A89",
    text: "Excellent service by staff Vignesh, eye brows raise ambience, warm welcome staffs. Keep rocking CEO in the house Kalpana!",
    rating: 5,
  },
  {
    name: "Santhi Babu",
    role: "Google Review",
    iconColor: "#6B7F73",
    text: "I received an excellent service from Rajani. Her attention to detail, professionalism, and friendly approach made the experience exceptional. Highly recommended!",
    rating: 5,
  },
]

// Color palette for user icons
const ICON_COLORS = ["#53675C", "#C8AFAE", "#8B9A8E", "#A68A89", "#6B7F73", "#9B8B7E"]

// Single Review Card Component
function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const shouldTruncate = review.text.length > 200

  return (
    <div
      className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#C8AFAE] transition-all duration-300"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Header: User Info */}
      <div className="flex items-start gap-4 mb-4">
        {/* User Photo or Icon */}
        <div className="flex-shrink-0">
          {review.photoUrl && !imageError ? (
            <Image
              src={review.photoUrl}
              alt={review.name}
              width={48}
              height={48}
              className="rounded-full"
              unoptimized
              onError={() => {
                console.log('Image failed to load for:', review.name, review.photoUrl)
                setImageError(true)
              }}
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: review.iconColor }}
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>

        {/* Name and Time */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium text-base truncate">
            {review.name}
          </h4>
          {review.relativeTime && (
            <p className="text-gray-500 text-sm">{review.relativeTime}</p>
          )}
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < review.rating ? 'text-[#FBBC04]' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm leading-relaxed">
        {shouldTruncate && !expanded
          ? `${review.text.substring(0, 200)}...`
          : review.text}
      </p>

      {/* Read More/Less Button */}
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#C8AFAE] text-sm font-medium mt-2 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0) // Current page index
  const [testimonials, setTestimonials] = useState<Review[]>(FALLBACK_REVIEWS)
  const [loading, setLoading] = useState(true)
  const [isFromGoogle, setIsFromGoogle] = useState(false)
  const [totalRating, setTotalRating] = useState<number | null>(null)
  const [totalReviews, setTotalReviews] = useState<number | null>(null)

  // Fetch Google reviews
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')

        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }

        const data = await response.json()
        console.log('Received reviews data:', data)
        console.log('Number of reviews:', data.reviews?.length)

        if (data.reviews && data.reviews.length > 0) {
          // Log photo URLs
          data.reviews.forEach((review: any, idx: number) => {
            console.log(`Review ${idx + 1} - ${review.name} - Photo URL:`, review.photoUrl)
          })

          // Transform reviews - show ALL reviews
          const transformedReviews: Review[] = data.reviews
            .filter((review: any) => review.rating >= 4) // Only show 4-5 star reviews
            .sort((a: any, b: any) => {
              // Sort by rating first, then by time
              if (b.rating !== a.rating) return b.rating - a.rating
              return b.time - a.time
            })
            .map((review: any, index: number) => ({
              name: review.name,
              role: "Google Review",
              iconColor: ICON_COLORS[index % ICON_COLORS.length],
              text: review.text,
              rating: review.rating,
              time: review.time,
              relativeTime: review.relativeTime,
              photoUrl: review.photoUrl,
            }))

          console.log('Transformed reviews:', transformedReviews)
          setTestimonials(transformedReviews)
          setIsFromGoogle(true)
          setTotalRating(data.totalRating)
          setTotalReviews(data.totalReviews)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
        // Keep fallback reviews
        setIsFromGoogle(false)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (testimonials.length <= 2) return // Don't auto-advance if only 2 or fewer reviews

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const totalPages = Math.ceil(testimonials.length / 2)

  return (
    <section ref={ref} className="py-24 bg-[#0F0F0F]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Main Section Heading */}
        <div className="text-center mb-12">
          <p className="text-[#C8AFAE] text-sm tracking-[0.35em] uppercase mb-2">
            TESTIMONIALS
          </p>
        </div>

        {/* Google Map Section */}
        <div className="mb-16">
          {/* Map Embed */}
          <div className="relative w-full h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:ChIJ5R3P1HxIuJoRk3OviXZ9FVA"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anaplak Art And Glam Salon Location"
            />
          </div>
        </div>

        {/* Reviews Heading with Google Branding */}
        <div className="text-center mb-12">
          <h2 className="text-white text-[44px] md:text-[54px] font-bold leading-tight tracking-wide mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>

          {/* Google Reviews Badge */}
          {isFromGoogle && totalRating && totalReviews && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg px-6 py-3">
                {/* Google Logo */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>

                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-xl">{totalRating.toFixed(1)}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(totalRating) ? 'text-[#FBBC04]' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">{totalReviews} Google reviews</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C8AFAE]"></div>
          </div>
        ) : (
          <>
            {/* Carousel - Show 2 Reviews at a Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {testimonials.slice(active * 2, active * 2 + 2).map((review, index) => (
                <ReviewCard
                  key={active * 2 + index}
                  review={review}
                  index={index}
                />
              ))}
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? "bg-[#C8AFAE] w-8" : "bg-[#666] hover:bg-[#888]"
                      }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Review Counter */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Showing {active * 2 + 1}-{Math.min(active * 2 + 2, testimonials.length)} of {testimonials.length} reviews
              </p>
            </div>
          </>
        )}

      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
