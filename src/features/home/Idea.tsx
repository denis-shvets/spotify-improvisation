import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import Button from '@/shared/Button';

function Idea() {
  return (
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
          extra libraries, no AI, no design. Just raw improvisation. The result
          won&apos;t be perfect, but it will be fast, minimum viable, even
          responsive, and I hope enough to keep the conversation going.
        </p>
      </div>
      <div className="mt-6 sm:mt-8">
        <Button href="#projects">Continue to projects</Button>
      </div>
    </section>
  );
}

export default Idea;
