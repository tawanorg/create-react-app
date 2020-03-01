/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from 'components/Navigation';

import HomePage from 'containers/HomePage/Loadable';
import BrowsePage from 'containers/BrowsePage/Loadable';
import AdvisorPage from 'containers/AdvisorPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/courses" component={BrowsePage} />
        <Route exact path="/advisors" component={AdvisorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
