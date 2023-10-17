import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One-Note :)',
  description: 'It is the connected workspace where better, faster work happens',
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/light.png",
      href: "/light.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/dark.png",
      href: "/dark.png",
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
