"use client"

import { useState } from "react"

interface BlogSearchProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string | null) => void
  categories: string[]
  activeCategory: string | null
}

export default function BlogSearch({ 
  onSearch, 
  onCategoryFilter, 
  categories, 
  activeCategory 
}: BlogSearchProps) {
  const [searchValue, setSearchValue] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearch(value)
  }

  const handleCategoryClick = (category: string | null) => {
    onCategoryFilter(category)
  }

  return (
    <div className="mb-12 space-y-6">
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search articles by title, description, or tags..."
          className="w-full bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl px-5 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#F8C8DC] transition-colors"
          aria-label="Search blog articles"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === null
              ? "bg-[#F8C8DC] text-black"
              : "bg-[#1B1B1B] text-gray-300 border border-[#2A2A2A] hover:border-[#F8C8DC]"
          }`}
          aria-pressed={activeCategory === null}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-[#F8C8DC] text-black"
                : "bg-[#1B1B1B] text-gray-300 border border-[#2A2A2A] hover:border-[#F8C8DC]"
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}