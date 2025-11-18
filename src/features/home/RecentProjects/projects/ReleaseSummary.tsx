import Image from 'next/image';

import Details from '../Details';

function ReleaseSummary() {
  return (
    <Details>
      <Details.Header>AI - Release Summary</Details.Header>
      <Details.Intro thumbnail="/projects/release-summary.png">
        GitHub workflow that automatically generates human-friendly release
        notes.
      </Details.Intro>
      <Details.Content>
        <p>Basic tech stack: TypeScript, GitHub Actions, AI.</p>
        <p>
          GitHub workflow that automatically generates human-friendly release
          notes. When you create a project release, the workflow scans all
          commits from the previous release to the current one. Because the
          commits follow the Conventional Commits specification, they carry a
          lot of useful metadata. The workflow produces clean, user-friendly
          release notes by filtering out developer-only details and interpreting
          feature flags. It also includes settings that control how much
          information is shown and whether the notes are intended for public or
          internal audiences. It supports multiple output formats, including
          Slack Blocks, Markdown, HTML, and more, and it&apos;s multilingual. If
          needed, we can even request the summary in Japanese.
        </p>
        <Image
          src="/release-summary/slack-message.png"
          alt="Release summary Slack message screenshot"
          width={2242 / 1.5}
          height={616 / 1.5}
          className="rounded-sm"
        />
      </Details.Content>
    </Details>
  );
}

export default ReleaseSummary;
