import Script from "next/script"

interface PreferredSourceButtonProps {
  className?: string
}

export default function PreferredSourceButton({ className = "" }: PreferredSourceButtonProps) {
  return (
    <div className={className}>
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="afterInteractive"
      />
      <div {...{ "google-add-preferred-source-btn": "", "data-theme": "dark" }} />
    </div>
  )
}
