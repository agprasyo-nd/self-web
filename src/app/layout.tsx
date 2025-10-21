import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio website built with Next.js',
}

// Next.js App Router expects a `viewport` export (move viewport config here)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}