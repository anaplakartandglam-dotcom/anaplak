/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 90],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },

  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/logo_updated.webp',
        destination: '/images/brand/anaplak-art-and-glam-logo.webp',
        permanent: true,
      },
      {
        source: '/logo_new.jpeg',
        destination: '/images/brand/anaplak-art-and-glam-logo.jpeg',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/services/hair-styling',
        destination: '/services/hair-styling-chennai',
        permanent: true,
      },
      {
        source: '/services/hair-coloring',
        destination: '/services/hair-coloring-chennai',
        permanent: true,
      },
      {
        source: '/services/hair-treatment',
        destination: '/services/hair-treatment-chennai',
        permanent: true,
      },
      {
        source: '/services/hair-extension',
        destination: '/services/hair-extension-chennai',
        permanent: true,
      },
      {
        source: '/services/facial-treatments',
        destination: '/services/facial-treatments-chennai',
        permanent: true,
      },
      {
        source: '/services/manicure-pedicure',
        destination: '/services/manicure-pedicure-chennai',
        permanent: true,
      },
      {
        source: '/services/nail-art-extension',
        destination: '/services/nail-art-extension-chennai',
        permanent: true,
      },
      {
        source: '/services/party-makeup',
        destination: '/services/party-makeup-chennai',
        permanent: true,
      },
      {
        source: '/services/engagement-makeup',
        destination: '/services/engagement-makeup-chennai',
        permanent: true,
      },
      {
        source: '/services/complete-bridal-package',
        destination: '/services/bridal-makeup-chennai',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
