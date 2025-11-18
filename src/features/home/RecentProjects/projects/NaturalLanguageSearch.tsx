import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, TriangleAlert } from 'lucide-react';

import Details from '../Details';

function NaturalLanguageSearch() {
  return (
    <Details>
      <Details.Header>AI - Natural Language Search</Details.Header>
      <Details.Intro thumbnail="/projects/natural-language-search.png">
        The idea is to let users apply filters using natural language.
      </Details.Intro>
      <Details.Content>
        <p className="flex items-center gap-2">
          <TriangleAlert className="size-4" />
          The project uses a free AI model, which means it may occasionally hit
          request limits. In case of any other errors, simply try again.
          <TriangleAlert className="size-4" />
        </p>
        <p>
          Demo:{' '}
          <Link
            href="https://natural-language-search-inky.vercel.app/"
            target="_blank"
            className="inline-flex items-center gap-2 underline"
          >
            https://natural-language-search-inky.vercel.app/
            <ExternalLink className="size-4" />
          </Link>
        </p>
        <p>Basic tech stack: React, TypeScript, NextJS, AI.</p>
        <p>
          Users can apply filters using natural language. For example, you can
          type: “Give me all the orders from the last two weeks that are
          partially captured.” The AI will take you directly to the Orders page
          with the filters pre-set to Partially Captured and the appropriate
          two-week date range. You can use any language the AI understands, and
          as a bonus, you can also use the microphone to issue voice prompts.
        </p>
        <Image
          src="/natural-language-search/search.png"
          alt="Natural language search screenshot"
          width={1682 / 1.5}
          height={572 / 1.5}
          className="rounded-sm"
        />
      </Details.Content>
    </Details>
  );
}

export default NaturalLanguageSearch;
