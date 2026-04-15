"use client"

import Image from "next/image"
import Link from "next/link"
import { Blog } from "@/data/blogData"

interface BlogCardProps {
  blog: Blog
  priority?: boolean
}

export default function BlogCard({ blog, priority = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number)
    return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <Link href={`/blogs/${blog.id}`} className="block group">
      <article className="blog-card h-full flex flex-col">
        <div className="relative w-full h-[220px] md:h-[240px] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={priority}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#F8C8DC] text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-white text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#F8C8DC] transition-colors">
            {blog.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
            {blog.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#2A2A2A]">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{blog.author}</p>
                <p className="text-gray-400 text-sm">{blog.authorRole}</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{blog.readTime}</span>
              </div>
              <p className="text-gray-500 text-xs">{formatDate(blog.createdAt)}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}