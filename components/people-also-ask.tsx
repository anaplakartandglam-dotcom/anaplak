import Script from "next/script"
import { HOMEPAGE_FAQS } from "@/data/paaData"
import { businessInfo } from "@/data/businessInfo"

export default function PeopleAlsoAsk() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOMEPAGE_FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
            Frequently Asked <span className="text-[#F8C8DC] italic">Questions</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Straight answers about prices, treatments and booking at Anaplak Art & Glam, Maduravoyal, Chennai.
            For anything specific, call us on{" "}
            <a href={businessInfo.phone.primaryHref} className="text-[#F8C8DC] hover:underline">
              {businessInfo.phone.primaryDisplay.replace(" ", "")}
            </a>{" "}
            or WhatsApp us directly.
          </p>
        </div>

        <div className="space-y-4">
          {HOMEPAGE_FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-[#2A2A2A] bg-[#1B1B1B] p-6 open:border-[#F8C8DC]/60 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base md:text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <span className="shrink-0 text-[#F8C8DC] transition-transform duration-300 group-open:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-300 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}