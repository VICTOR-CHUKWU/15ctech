import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LayoutProvider } from './LayoutProvider'
import '@/style/app.scss'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
