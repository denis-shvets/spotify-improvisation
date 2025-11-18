import type { ReactNode } from 'react';

import Footer from '@/shared/layout/Footer';
import Header from '@/shared/layout/Header';

type DefaultLayoutProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
