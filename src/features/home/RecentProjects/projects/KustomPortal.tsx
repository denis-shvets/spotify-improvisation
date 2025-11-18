import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Info, WifiOff } from 'lucide-react';

import Details from '../Details';

const GISTS = [
  {
    title: 'Commit message example',
    url: 'https://gist.github.com/denis-shvets/3b5f656d5226680730916c8825e64c3a',
  },
  {
    title: 'Types',
    url: 'https://gist.github.com/denis-shvets/e949faed31e0a7efaf97cb3320440497',
  },
  {
    title: 'Components',
    url: 'https://gist.github.com/denis-shvets/6645adc1c9594f577ad5e8d25c997e20',
  },
  {
    title: 'Hooks',
    url: 'https://gist.github.com/denis-shvets/68eaa48eeda314fb7341c9ab82722692',
  },
  {
    title: 'Tests',
    url: 'https://gist.github.com/denis-shvets/dfb2a3c20baf2afaebd355e382d174db',
  },
];

function KustomPortal() {
  return (
    <Details>
      <Details.Header>Kustom Portal</Details.Header>
      <Details.Intro thumbnail="/projects/kustom-portal.png">
        Internal merchant operations hub that brings together onboarding,
        monitoring, settlements, orders, integrations, notifications, analytics,
        and user-management tools into a single secure workspace for both agents
        and merchants.
      </Details.Intro>
      <Details.Content>
        <p className="flex items-center gap-2">
          <WifiOff className="size-4" /> Behind the access wall, so I&apos;ll
          share the highlights.
        </p>
        <p>
          I created this project from scratch - the architecture, most features,
          the initial infrastructure, and the shadcn/ui-based design. At first I
          only had help from a backend engineer. As the team grew, we
          implemented the Figma designs, shipped new features, and gained
          support from the infrastructure team. We also adopted a small UI
          library I built to share components and utilities across other
          projects. Today eight engineers and two managers are working on it.
        </p>
        <p>
          Basic tech stack: NextJS, TypeScript, TailwindCSS, Tanstack Query,
          Radix, React Context as an app state.
        </p>
        <Image
          src="/kustom-portal/languages.png"
          alt="Languages insights"
          width={622 / 1.5}
          height={94 / 1.5}
          className="rounded-sm"
        />
        <p>
          Gists with examples (nothing confidential; redacted snippets are
          replaced with &quot;...&quot;):
        </p>
        <ul>
          {GISTS.map((gist) => (
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
        <p className="flex items-center gap-2">
          <Info className="size-4" /> The Kustom Portal data below is not real
          (dev mode).
        </p>
        <p>Orders page.</p>
        <Image
          src="/kustom-portal/orders-page.png"
          alt="Orders page screenshot"
          width={4596 / 2.2}
          height={2778 / 2.2}
          className="rounded-sm"
        />
        <p>Agents page.</p>
        <Image
          src="/kustom-portal/agents-page.png"
          alt="Agents page screenshot"
          width={4596 / 2.2}
          height={2778 / 2.2}
          className="rounded-sm"
        />
        <p>
          We built fully accessible modals so you can navigate purely by
          keyboard and rely on voice-over guidance.
        </p>
        <Image
          src="/kustom-portal/refund-modal.png"
          alt="Refund modal screenshot"
          width={1228 / 2.2}
          height={1598 / 2.2}
          className="rounded-sm"
        />
        <p>
          We use plenty of drawers with route interception, so you can share a
          link and other users will see the exact same details.
        </p>
        <Image
          src="/kustom-portal/order-details-drawer.png"
          alt="Order details drawer screenshot"
          width={1794 / 2.2}
          height={2770 / 2.2}
          className="rounded-sm"
        />
        <p>
          Here is my overall contribution (the engineer on the right is a former
          Spotify consultant).
        </p>
        <Image
          src="/kustom-portal/contribution.png"
          alt="Contribution insights"
          width={1810 / 2.2}
          height={1194 / 2.2}
          className="rounded-sm"
        />
      </Details.Content>
    </Details>
  );
}

export default KustomPortal;
