"use client"

import { useState, useMemo, useEffect, useCallback, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import BlogSearch from "@/components/blog/BlogSearch"
import BlogList from "@/components/blog/BlogList"
import { blogData, getAllCategories, searchBlogs, getBlogsByCategory, BLOGS_PER_PAGE } from "@/data/blogData"

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)

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

  const displayedBlogs = useMemo(() => {
    return filteredBlogs.slice(0, visibleCount)
  }, [filteredBlogs, visibleCount])

  const hasMore = visibleCount < filteredBlogs.length

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return
    setLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BLOGS_PER_PAGE, filteredBlogs.length))
      setLoading(false)
    }, 600)
  }, [loading, hasMore, filteredBlogs.length])

  useEffect(() => {
    setVisibleCount(BLOGS_PER_PAGE)
  }, [searchQuery, activeCategory])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      { rootMargin: "200px" }
    )

    const currentLoader = loaderRef.current
    if (currentLoader) {
      observer.observe(currentLoader)
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader)
      }
    }
  }, [hasMore, loadMore, loading])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category)
  }

  return (
    <main className="min-h-screen bg-black mt-10 md:mt-25">
      <Header />
      
      <PageHeader
        label="Our Blogs"
        title="Beauty"
        titleAccent="Insights"
        description="Expert tips, trends, and guides from our team to help you look and feel your best"
      />

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <BlogSearch
            onSearch={handleSearch}
            onCategoryFilter={handleCategoryFilter}
            categories={categories}
            activeCategory={activeCategory}
          />

          <BlogList
            blogs={displayedBlogs}
            priorityFirst
            loading={loading}
            skeletonCount={BLOGS_PER_PAGE}
          />

          {hasMore && !loading && (
            <div ref={loaderRef} className="h-10" />
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}