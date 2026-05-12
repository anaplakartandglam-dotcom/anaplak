"use client"

import { Blog } from "@/data/blogData"
import BlogCard from "./BlogCard"
import BlogCardSkeleton from "./BlogCardSkeleton"

interface BlogListProps {
  blogs: Blog[]
  priorityFirst?: boolean
  loading?: boolean
  skeletonCount?: number
}

export default function BlogList({ blogs, priorityFirst = false, loading = false, skeletonCount = 9 }: BlogListProps) {
  if (!loading && blogs.length === 0) {
    return (
      <div className="text-center py-16">
        <svg
          className="w-16 h-16 mx-auto text-gray-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
        <p className="text-gray-400">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          priority={priorityFirst && index === 0}
        />
      ))}
      {loading && Array.from({ length: skeletonCount }).map((_, i) => (
        <BlogCardSkeleton key={`skeleton-${i}`} />
      ))}
    </div>
  )
}