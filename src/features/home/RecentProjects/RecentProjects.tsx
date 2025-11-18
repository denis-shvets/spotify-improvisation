'use client';

import Project from './Project';
import KustomCheckout from './projects/KustomCheckout';
import KustomPortal from './projects/KustomPortal';
import NaturalLanguageSearch from './projects/NaturalLanguageSearch';
import ReleaseSummary from './projects/ReleaseSummary';

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
    <section
      className="m-auto w-full max-w-[1920px] scroll-mt-24 px-4 py-24 sm:px-8 lg:px-32 lg:py-32"
      id="projects"
    >
      <h2 className="text-spotify-subdued mb-24 text-center text-[2.5em] leading-[1.2em] font-extralight sm:text-[3em] md:mb-32 md:text-[3.5em]">
        My recent projects
        <br />{' '}
        <span className="text-foreground font-bold">
          and favorite proof-of-concepts
        </span>
      </h2>
      <div className="flex justify-center">
        <div className="grid items-end gap-16 lg:grid-cols-2">
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
