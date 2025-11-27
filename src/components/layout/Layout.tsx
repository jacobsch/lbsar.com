import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children, transparentHeader=true }: { children: ReactNode, transparentHeader?: boolean }) {
  // Put Header or Footer Here
  return (
    <div>
      <Header transparentHeader={transparentHeader} />
      {children}
      <Footer />
    </div>
  );
}
