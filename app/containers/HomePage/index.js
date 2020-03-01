/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import HomeHero from 'components/HomeHero';
import SectionHowDoesItWork from 'components/SectionHowDoesItWork';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <HomeHero />
      <SectionHowDoesItWork />
    </div>
  );
}
