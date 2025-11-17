import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-spotify-green-a hover:bg-spotify-green-b rounded-full px-8 py-2 leading-8 font-bold text-black transition-transform hover:scale-[1.04]">
      {children}
    </button>
  );
}

export default Button;
