import { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      <Header />

      {/* Offset for fixed header height (matches your py-4 / lg:py-5 header) */}
      <main className="relative flex-1 pt-[72px] lg:pt-[80px]">
        {children}
      </main>

      <Footer />
    </div>
  )
}
