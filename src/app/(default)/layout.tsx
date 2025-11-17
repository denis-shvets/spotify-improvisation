import type { ReactNode } from 'react';

import Header from '@/shared/layout/Header';

type DefaultLayoutProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
