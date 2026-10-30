import type { Blog } from "@/data/blogData"

export type BlogSort = "newest" | "oldest" | "title-az" | "title-za"

export const SORT_OPTIONS: { value: BlogSort; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title-az", label: "Title A to Z" },
  { value: "title-za", label: "Title Z to A" },
]

export function sortBlogs(blogs: Blog[], sort: BlogSort): Blog[] {
  const copy = [...blogs]

  switch (sort) {
    case "oldest":
      return copy.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    case "title-az":
      return copy.sort((a, b) => a.title.localeCompare(b.title))
    case "title-za":
      return copy.sort((a, b) => b.title.localeCompare(a.title))
    default:
      return copy.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }
}
