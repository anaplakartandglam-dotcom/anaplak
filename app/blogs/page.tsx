"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogSearch from "@/components/blog/BlogSearch"
import BlogList from "@/components/blog/BlogList"
import { blogData, getAllCategories, searchBlogs, getBlogsByCategory } from "@/data/blogData"

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = useMemo(() => getAllCategories(), [])

  const filteredBlogs = useMemo(() => {
    let blogs = blogData

    if (activeCategory) {
      blogs = getBlogsByCategory(activeCategory)
    }

    if (searchQuery) {
      blogs = searchBlogs(searchQuery)
    }

    return blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }, [searchQuery, activeCategory])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category)
  }

  return (
    <main className="min-h-screen bg-black mt-10 md:mt-25">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Our Blogs
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Beauty <span className="text-[#F8C8DC] italic">Insights</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expert tips, trends, and guides from our team to help you look and feel your best
            </p>
          </div>

          <BlogSearch
            onSearch={handleSearch}
            onCategoryFilter={handleCategoryFilter}
            categories={categories}
            activeCategory={activeCategory}
          />

          <BlogList blogs={filteredBlogs} priorityFirst />
        </div>
      </section>

      <Footer />
    </main>
  )
}