"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog/BlogCard"
import { getLatestBlogs } from "@/data/blogData"

export default function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const latestBlogs = getLatestBlogs(3)

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            From Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Beauty <span className="text-[#F8C8DC] italic">Insights</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert tips, trends, and guides to help you look and feel your best
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {latestBlogs.map((blog, index) => (
            <div
              key={blog.id}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <BlogCard blog={blog} priority={index === 0} />
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-colors"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}