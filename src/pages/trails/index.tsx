import { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Offset content for fixed header height:
          - mobile ≈ 72px (py-4)
          - lg+   ≈ 80px (py-5)
      */}
      <main className="flex-1 pt-[72px] lg:pt-[80px]">
        {children}
      </main>

      <Footer />
    </div>
  )
}
