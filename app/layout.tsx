import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech resources',
  description: 'Tech Resources',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://ibb.co/3MRrGLp',
    "twitter:card": "summary_large_image",
    "og:url": "Tech Resources",
    "og:image": 'https://ibb.co/3MRrGLp',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}