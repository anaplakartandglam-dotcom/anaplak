"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import BlogSearch from "@/components/blog/BlogSearch"
import BlogList from "@/components/blog/BlogList"
import BlogPagination from "@/components/blog/BlogPagination"
import { blogData, getAllCategories, searchBlogs, getBlogsByCategory, BLOGS_PER_PAGE } from "@/data/blogData"
import { BlogSort, sortBlogs } from "@/lib/blogSort"

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<BlogSort>("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const listTopRef = useRef<HTMLDivElement>(null)

  const categories = useMemo(() => getAllCategories(), [])

  const filteredBlogs = useMemo(() => {
    let blogs = blogData

    if (activeCategory) {
      blogs = getBlogsByCategory(activeCategory)
    }

    if (searchQuery) {
      blogs = searchBlogs(searchQuery)
    }

    return sortBlogs(blogs, sortBy)
  }, [searchQuery, activeCategory, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE))

  const displayedBlogs = useMemo(() => {
    const start = (currentPage - 1) * BLOGS_PER_PAGE
    return filteredBlogs.slice(start, start + BLOGS_PER_PAGE)
  }, [filteredBlogs, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory, sortBy])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
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
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div ref={listTopRef} className="scroll-mt-28" />

          <BlogList
            blogs={displayedBlogs}
            priorityFirst={currentPage === 1}
            loading={false}
            skeletonCount={BLOGS_PER_PAGE}
          />

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredBlogs.length}
            pageSize={BLOGS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
