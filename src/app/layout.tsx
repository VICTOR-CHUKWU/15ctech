import type { Metadata } from 'next'
import { Lobster } from 'next/font/google'
import { LayoutProvider } from './LayoutProvider'
import '@/style/app.scss'

const lobster = Lobster({ subsets: ['latin', 'cyrillic', 'cyrillic-ext'], weight: '400' })

export const metadata: Metadata = {
  title: '15C Tech Ltd ',
  description: 'A company that developes your web applications, mobile application, manage your project and market your product',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lobster.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
