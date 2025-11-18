import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import Details from './Details';

const LINKS = [
  {
    title: 'KICKS',
    url: 'https://www.kicks.se/',
  },
  {
    title: 'Apotea',
    url: 'https://www.apotea.se/',
  },
  {
    title: 'Adlibris',
    url: 'https://www.adlibris.com/sv',
  },
];

function KustomCheckout() {
  return (
    <Details>
      <Details.Header>Kustom Checkout</Details.Header>
      <Details.Intro thumbnail="/projects/kustom-checkout.png">
        An all-in-one checkout that lifts conversions, keeps customers coming
        back, and makes selling simple wherever you grow &copy;
      </Details.Intro>
      <Details.Content>
        <p>Basic tech stack: React, TypeScript, TailwindCSS, Redux.</p>
        <p>
          I&apos;m pretty sure everyone has used Kustom Checkout at least once.
        </p>
        <p>Each of these sites has Kustom Checkout integrated.</p>
        <ul>
          {LINKS.map((gist) => (
            <li key={gist.title} className="ml-4 list-disc">
              <Link
                href={gist.url}
                target="_blank"
                className="flex items-center gap-2 underline"
              >
                {gist.title} <ExternalLink className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <p>
          To experience the product, pick any item and move through the checkout
          process.
        </p>
        <p>
          I worked on this project actively at Klarna, then led the migration to
          a new ecosystem at Kustom. After the successful migration to our own
          servers, I started working on Kustom Portal to close gaps in the
          ecosystem. I now support Kustom Checkout with a shared UI library that
          provides accessible UI elements.
        </p>
        <Image
          src="/kustom-checkout/checkout.png"
          alt="Kustom Checkout screenshot"
          width={697 / 1.5}
          height={1279 / 1.5}
          className="rounded-sm"
        />
      </Details.Content>
    </Details>
  );
}

export default KustomCheckout;
