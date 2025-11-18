import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Improvisation',
  description: 'Unlock the potential of human creativity',
};

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="min-w-[375px] scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

export default RootLayout;
