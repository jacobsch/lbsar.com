import { ReactNode } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="pt-14 flex-1">{children}</main>
      <Footer />
    </div>
  )
}
