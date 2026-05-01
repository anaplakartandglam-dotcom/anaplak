import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog/BlogCard"
import TableOfContents from "@/components/blog/TableOfContents"
import BlogSchema from "@/components/blog/BlogSchema"
import { getBlogBySlug, blogData, getLatestBlogs } from "@/data/blogData"
import { addHeadingIds, extractHeadings, extractCTA, stripCTA } from "@/lib/blogHeadings"
import { extractFAQs, generateBlogSchema, generateFAQSchema } from "@/lib/blogSchema"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return {
      title: "Blog Not Found | Anaplak Art and Glam Salon",
    }
  }

  return {
    title: `${blog.title} | Anaplak Art and Glam Salon`,
    description: blog.description,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.createdAt,
      authors: [blog.author],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  }
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.id,
  }))
}

function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number)
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = getLatestBlogs(3).filter((b) => b.id !== blog.id).slice(0, 2)

  const processedContent = addHeadingIds(stripCTA(blog.content))
  const headings = extractHeadings(blog.content)
  const cta = extractCTA(blog.content)
  const faqs = extractFAQs(blog.content)
  const { articleSchema, breadcrumbSchema } = generateBlogSchema(blog)
  const faqSchema = generateFAQSchema(faqs)

  return (
    <main className="min-h-screen bg-black mt-10 md:mt-25">
      <Header />
      <BlogSchema articleSchema={articleSchema} breadcrumbSchema={breadcrumbSchema} faqSchema={faqSchema} />

      <article className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#F8C8DC] transition">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blogs" className="hover:text-[#F8C8DC] transition">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#F8C8DC]">{blog.category}</li>
            </ol>
          </nav>

          <header className="mb-12">
            <span className="inline-block bg-[#F8C8DC] text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            <p className="text-gray-300 text-lg mb-8">{blog.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#2A2A2A]">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{blog.author}</p>
                  <p className="text-gray-500">{blog.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </header>

          <div className="md:hidden mb-8">
            <TableOfContents headings={headings} />
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1000px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex gap-12">
            <div className="min-w-0">
              <div
                className="blog-article mb-12"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {cta && (
                <div className="cta-card mb-12">
                  <h2 className="cta-heading">{cta.heading}</h2>
                  <p className="cta-text">{cta.text}</p>
                  <div className="cta-actions">
                    <a
                      href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn-primary"
                    >
                      {blog.ctaText || "Book Appointment"}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/919840088867?text=${encodeURIComponent(blog.whatsappMessage || "Hi, I'd like to book an appointment at Anaplak Art and Glam Salon.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn-whatsapp"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.26 9.26 0 01-4.721-1.274l-.339-.2-3.519.924.94-3.433-.223-.357a9.253 9.253 0 01-1.42-4.929c.002-5.12 4.17-9.287 9.293-9.287a9.246 9.246 0 016.585 2.734 9.218 9.218 0 012.708 6.576c-.003 5.12-4.172 9.287-9.295 9.287m8.145-17.442C17.383 1.113 14.823.008 12.05.004 5.46.004.004 5.46.002 12.053c0 1.99.52 3.937 1.51 5.667L0 24l6.405-1.68a11.356 11.356 0 005.426 1.385h.004c6.59 0 11.947-5.363 11.95-11.95a11.854 11.854 0 00-3.494-8.442z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              )}
            </div>

            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-32">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#1B1B1B] border border-[#2A2A2A] text-gray-400 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-[#0E0E0E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-black relative overflow-hidden">
        {/* Spiral gradient background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] relative">
            <div className="absolute inset-0 bg-gradient-conic from-[#F8C8DC] via-transparent to-[#F8C8DC] opacity-20 blur-3xl animate-spin-slow" />
            <div className="absolute inset-[10%] bg-gradient-conic from-[#F8C8DC] via-transparent to-[#F8C8DC] opacity-15 blur-2xl animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            <div className="absolute inset-[20%] bg-gradient-conic from-[#F8C8DC] via-transparent to-[#F8C8DC] opacity-10 blur-xl animate-spin-slow" style={{ animationDuration: '20s' }} />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-[#F8C8DC] italic">Get Started?</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {blog.ctaText || "Book your appointment today and experience the Anaplak difference."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
            >
              {blog.ctaText || "Book Appointment"}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`https://wa.me/919840088867?text=${encodeURIComponent(blog.whatsappMessage || "Hi, I'd like to book an appointment at Anaplak Art and Glam Salon.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.26 9.26 0 01-4.721-1.274l-.339-.2-3.519.924.94-3.433-.223-.357a9.253 9.253 0 01-1.42-4.929c.002-5.12 4.17-9.287 9.293-9.287a9.246 9.246 0 016.585 2.734 9.218 9.218 0 012.708 6.576c-.003 5.12-4.172 9.287-9.295 9.287m8.145-17.442C17.383 1.113 14.823.008 12.05.004 5.46.004.004 5.46.002 12.053c0 1.99.52 3.937 1.51 5.667L0 24l6.405-1.68a11.356 11.356 0 005.426 1.385h.004c6.59 0 11.947-5.363 11.95-11.95a11.854 11.854 0 00-3.494-8.442z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}