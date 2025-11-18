'use client';

import KustomCheckout from './KustomCheckout';
import KustomPortal from './KustomPortal';
import NaturalLanguageSearch from './NaturalLanguageSearch';
import Project from './Project';
import ReleaseSummary from './ReleaseSummary';

const PROJECTS = [
  {
    className:
      'bg-[linear-gradient(rgb(239,119,161)_0%,rgba(239,119,161,0.04)_99%)]',
    description:
      'Kustom Portal is an internal merchant operations hub that brings together onboarding, monitoring, settlements, orders, integrations, notifications, analytics, and user-management tools into a single secure workspace for both agents and merchants.',
    notes: 'Founding Frontend Software Engineer',
    thumbnail: '/projects/kustom-portal.png',
    content: KustomPortal,
  },
  {
    className:
      'bg-[linear-gradient(rgb(175,147,196)_0%,rgba(175,147,196,0.04)_99%)]',
    description:
      'Kustom Checkout is an all-in-one checkout lifts conversions, keeps customers coming back and makes selling simple wherever you grow \u00A9',
    notes: 'Frontend Software Engineer',
    thumbnail: '/projects/kustom-checkout.png',
    content: KustomCheckout,
  },
  {
    className:
      'bg-[linear-gradient(rgb(255,100,55)_0%,rgba(255,100,55,0.04)_99%)]',
    description: 'AI - Release summary',
    notes: 'Personal proof-of-concept',
    thumbnail: '/projects/release-summary.png',
    content: ReleaseSummary,
  },
  {
    className: 'bg-[linear-gradient(rgb(12,49,94)_0%,rgba(12,49,94,0.04)_99%)]',
    description: 'AI - Natural language search',
    notes: 'Personal proof-of-concept',
    thumbnail: '/projects/natural-language-search.png',
    content: NaturalLanguageSearch,
  },
];

function RecentProjects() {
  return (
    <section className="m-auto w-full max-w-[1920px] p-32">
      <h2 className="text-spotify-subdued mb-32 text-center text-[3.5em] leading-[1.2em] font-extralight">
        My recent projects
        <br />{' '}
        <span className="text-foreground text-[4rem] font-bold">
          and favorite proof-of-concepts
        </span>
      </h2>
      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-2 items-end gap-16">
          {PROJECTS.map((project) => (
            <Project
              key={project.description}
              className={project.className}
              description={project.description}
              notes={project.notes}
              thumbnail={project.thumbnail}
              content={project.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
