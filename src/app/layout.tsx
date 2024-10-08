import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import Banner from '@/components/Banner'

export const metadata: Metadata = {
  title: {
    template: '%s - OTM',
    default: 'OTM Chiro',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <script>0</script>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
