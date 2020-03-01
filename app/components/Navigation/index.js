/**
 *
 * Navigation
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { SearchBoxSmall } from 'components/SearchBox';

function Navigation() {
  return (
    <div className="p-2 md:py-2 shadow-sm fixed z-30 w-full bg-white">
      <nav className="flex justify-between container">
        <div className="flex items-center flex-auto">
          <Link to="/" className="text-gray-700 text-md hover:text-gray-800">
            <img src="https://studee.com/logos/studee.svg" className="w-24" />
          </Link>
          <div className="flex-1 mx-6">
            {/* <SearchBoxSmall /> */}
          </div>
        </div>
        <div className="flex">
          <ul className="hidden lg:flex items-center text-sm">
            <li className="mr-6">
              <Link className="text-gray-700 hover:text-gray-800" to="/courses" title="All courses">Courses</Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-700 hover:text-gray-800" to="/advisors">Advices</Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-700 hover:text-gray-800" to="/advisors">Stories</Link>
            </li>
            <li className="mr-6">
              <a className="text-gray-700 hover:text-gray-800" href="#">Help</a>
            </li>
          </ul>
          <ul className="flex items-center">
            <li>
              <button className="bg-blue-500 hover:bg-blue-800 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 flex items-center">
                Join
              </button>
            </li>
            {/* <li className="ml-4 block md:hidden">
              <button type="button" className="text-gray-700 bg-white-400 hover:bg-white-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
              </button>
            </li> */}
            <li className="ml-4 block lg:hidden">
              <button type="button" className="text-gray-700 bg-white-400 hover:bg-white-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

Navigation.propTypes = {};

export default Navigation;
