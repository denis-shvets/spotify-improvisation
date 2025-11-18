import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import Button from '@/shared/Button';

function Idea() {
  return (
    <section className="m-auto flex h-200 max-h-[90vh] min-h-175 w-full max-w-[1920px] flex-col items-center justify-center gap-4 p-6 pt-24">
      <h2 className="text-center text-[4rem] font-bold">
        What&apos;s the idea?
      </h2>
      <div className="max-w-[70ch]">
        <p className="text-center text-[1.5rem]">
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
          won&apos;t be perfect, but it will be fast, minimum viable, and I hope
          enough to keep the conversation going.
        </p>
      </div>
      <div className="m-8">
        <Button href="#projects">Continue to projects</Button>
      </div>
    </section>
  );
}

export default Idea;
