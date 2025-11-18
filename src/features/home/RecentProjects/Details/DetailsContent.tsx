import type { ReactNode } from 'react';

type DetailsContentProps = {
  children: ReactNode;
};

function DetailsContent({ children }: DetailsContentProps) {
  return (
    <section className="space-y-4 rounded-b-2xl bg-[linear-gradient(0deg,#242424,rgba(18,18,18,0.2))] p-6 pb-12">
      {children}
    </section>
  );
}

export default DetailsContent;
