import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { template: '%s • Acme', default: 'Acme' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx('antialiased', inter.className)}>{children}</body>
    </html>
  )
}
