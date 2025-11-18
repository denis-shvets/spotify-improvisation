import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
};

function Button({ children, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="bg-spotify-green-a hover:bg-spotify-green-b block rounded-full px-8 py-2 text-center leading-8 font-bold text-black transition-transform hover:scale-[1.04]"
    >
      {children}
    </Link>
  );
}

export default Button;
