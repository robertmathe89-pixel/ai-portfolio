import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Automation Services | Transform Your Business with AI',
  description: 'Cutting-edge AI automation solutions to streamline your business operations, boost productivity, and drive growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-container">
      <body className="antialiased">{children}</body>
    </html>
  )
}