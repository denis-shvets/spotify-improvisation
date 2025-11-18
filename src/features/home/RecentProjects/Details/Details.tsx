import type { ReactNode } from 'react';

import DetailsContent from './DetailsContent';
import DetailsHeader from './DetailsHeader';
import DetailsIntro from './DetailsIntro';

type DetailsProps = {
  children: ReactNode;
};

function Details({ children }: DetailsProps) {
  return <div>{children}</div>;
}

Details.Content = DetailsContent;
Details.Header = DetailsHeader;
Details.Intro = DetailsIntro;

export default Details;
