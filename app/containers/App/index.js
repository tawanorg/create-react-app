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

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <nav className="hidden md:flex bg-gray-700 py-2 px-5">
        <div className="container">
          <div className="flex justify-end">
          <ul className="flex items-center">
            <li className="mr-6">
              <span className="text-white text-sm">Australia - EN</span>
            </li>
            <li className="mr-6">
              <span className="text-white text-sm">About Us</span>
            </li>
            <li>
              <span className="text-white text-sm">FAQ</span>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <div className="p-3 md:p-5 shadow-md">
        <nav className="flex justify-between container">
          <ul className="flex items-center">
            <li className="mr-6">
              <a className="text-gray-600 hover:text-gray-700" href="#">StudyAdder</a>
            </li>
          </ul>
          <div className="flex">
            <ul className="hidden md:flex items-center">
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-700" href="#">Browse Courses</a>
              </li>
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-700" href="#">Costs Calculator</a>
              </li>
              <li className="mr-6">
                <a className="text-gray-600 hover:text-gray-700" href="#">Join / Login</a>
              </li>
            </ul>
            <ul className="flex items-center">
              <li className="mr-4">
                <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Compare
                </button>
              </li>
              <li>
                <button type="button" className="text-gray-700 bg-white-400 hover:bg-white-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
