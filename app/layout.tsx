import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { Toaster } from "sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
      <ConvexClientProvider>
        <ThemeProvider 
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         storageKey='one-note-theme-2'
         >

      <Toaster position="bottom-center" />  
        {children}
        </ThemeProvider>
      </ConvexClientProvider>
        
        </body>
    </html>
  )
}
