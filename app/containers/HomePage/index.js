/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import HomeHero from 'components/HomeHero';
import SectionHowDoesItWork from 'components/SectionHowDoesItWork';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <SectionHowDoesItWork />
    </div>
  );
}
