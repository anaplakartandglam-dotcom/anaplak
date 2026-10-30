"use client"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
}

function getPageItems(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const items: (number | "ellipsis")[] = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  if (start > 2) items.push("ellipsis")
  for (let page = start; page <= end; page++) items.push(page)
  if (end < total - 1) items.push("ellipsis")
  items.push(total)

  return items
}

export default function BlogPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null

  const from = (currentPage - 1) * pageSize + 1
  const to = Math.min(currentPage * pageSize, totalItems)
  const pages = getPageItems(currentPage, totalPages)

  const baseButton =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors"
  const idle =
    "border border-white/10 bg-[#1B1B1B] text-gray-300 hover:border-[#F8C8DC] hover:text-white"
  const active = "bg-[#F8C8DC] text-black"

  return (
    <div className="mt-12 flex flex-col items-center gap-5">
      <p className="text-sm text-gray-500">
        Showing {from} to {to} of {totalItems} guides
      </p>

      <nav aria-label="Blog pagination" className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${baseButton} ${idle} disabled:cursor-not-allowed disabled:opacity-40`}
          aria-label="Previous page"
        >
          Previous
        </button>

        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-1 text-gray-500" aria-hidden="true">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              aria-label={`Page ${page}`}
              className={`${baseButton} ${page === currentPage ? active : idle}`}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${baseButton} ${idle} disabled:cursor-not-allowed disabled:opacity-40`}
          aria-label="Next page"
        >
          Next
        </button>
      </nav>
    </div>
  )
}
