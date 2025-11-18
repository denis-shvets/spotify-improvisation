import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import Button from '@/shared/Button';

function Idea() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-1">
        <div className="absolute top-1/2 left-1/2 size-75 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/10 blur-[80px]"></div>
        <div className="absolute top-1/3 left-1/3 size-150 animate-[orbit1_18s_ease-in-out_infinite] rounded-full bg-[#ff6437]/30 blur-[140px]"></div>
        <div className="absolute right-1/3 bottom-1/3 size-140 animate-[orbit2_16s_ease-in-out_infinite] rounded-full bg-[#af93c4]/30 blur-[130px]"></div>
        <div className="absolute top-1/4 right-1/4 size-110 animate-[orbit3_20s_ease-in-out_infinite] rounded-full bg-[#0c315e]/25 blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 size-100 animate-[float_14s_ease-in-out_infinite] rounded-full bg-[#ef77a1]/20 blur-[110px]"></div>
      </div>
      <section className="m-auto flex max-h-[90vh] max-w-[1920px] flex-col items-center justify-center gap-4 p-4 pt-24 md:h-200 md:min-h-175 md:p-8">
        <h2 className="text-center text-[2.5rem] font-bold sm:text-[3.25rem] md:text-[4rem]">
          What&apos;s the idea?
        </h2>
        <div className="max-w-[70ch]">
          <p className="text-center text-[1rem] sm:text-[1.25rem] md:text-[1.5rem]">
            The idea is to recreate{' '}
            <Link
              className="inline-flex items-center gap-2 underline"
              href="https://confidence.spotify.com/#stories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confidence
              <ExternalLink className="size-6" />
            </Link>{' '}
            intro page in two days. Use the basics - Next.js, Tailwind, and a
            small self-introduction - to produce a fresh proof-of-concept. No
            plan, no extra libraries, no AI, no design. Just raw improvisation.
            The result won&apos;t be perfect, but it will be fast, minimum
            viable, even responsive, and I hope enough to keep the conversation
            going.
          </p>
        </div>
        <div className="mt-6 sm:mt-8">
          <Button href="#projects">Continue to projects</Button>
        </div>
      </section>
    </div>
  );
}

export default Idea;
