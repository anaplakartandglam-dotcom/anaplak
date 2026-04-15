"use client"

interface ShareButtonsProps {
  blogId: string
  blogTitle: string
}

export default function ShareButtons({ blogId, blogTitle }: ShareButtonsProps) {
  const shareUrl = `https://anaplakartandglamsalon.com/blogs/${blogId}`
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(blogTitle)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert("Link copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="border-t border-[#2A2A2A] pt-8 mb-12">
      <h2 className="text-xl font-bold text-white mb-6">Share this article</h2>
      <div className="flex flex-wrap gap-3 md:gap-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg text-gray-300 hover:border-[#F8C8DC] hover:text-[#F8C8DC] transition"
          aria-label="Share on Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg text-gray-300 hover:border-[#F8C8DC] hover:text-[#F8C8DC] transition"
          aria-label="Share on Twitter"
        >
          <i className="fa-brands fa-x-twitter"></i>
          Twitter
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(blogTitle + " - " + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg text-gray-300 hover:border-[#F8C8DC] hover:text-[#F8C8DC] transition"
          aria-label="Share on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
          WhatsApp
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg text-gray-300 hover:border-[#F8C8DC] hover:text-[#F8C8DC] transition"
          aria-label="Share on LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
          LinkedIn
        </a>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg text-gray-300 hover:border-[#F8C8DC] hover:text-[#F8C8DC] transition cursor-pointer"
          aria-label="Copy link to clipboard"
        >
          <i className="fa-solid fa-link"></i>
          Copy Link
        </button>
      </div>
    </div>
  )
}