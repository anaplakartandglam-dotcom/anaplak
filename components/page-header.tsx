interface PageHeaderProps {
  label: string
  title: string
  titleAccent?: string
  description: string
}

export default function PageHeader({ label, title, titleAccent, description }: PageHeaderProps) {
  return (
    <section className="pt-30 pb-10 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {titleAccent ? <>{title} <span className="text-[#F8C8DC] italic">{titleAccent}</span></> : title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}