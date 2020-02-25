/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Navigation() {
  return (
    <div className="p-3 md:py-3 shadow fixed z-30 w-full bg-white">
      <nav className="flex justify-between container">
        <div className="flex items-center flex-auto">
          <div className="mr-6">
            <a className="text-gray-700 text-md hover:text-gray-800" href="#">
              <img src="https://studee.com/logos/studee.svg" className="w-24" />
            </a>
          </div>
          <div className="relative flex-auto mr-6 hidden md:flex">
            <input className="relative transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal focus:outline-none focus:shadow-outline" type="text" placeholder="Subject or qualification, eg. IT" />
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
            </div>
          </div>
        </div>
        <div className="flex">
          <ul className="hidden lg:flex items-center text-sm">
            <li className="mr-6">
              <a className="text-gray-700 hover:text-gray-800" href="#">Courses</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-700 hover:text-gray-800" href="#">Career advice</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-700 hover:text-gray-800" href="#">Join / Login</a>
            </li>
          </ul>
          <ul className="flex items-center">
            <li>
              <button className="bg-pink-500 hover:bg-pink-800 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 flex items-center">
                Compare (2)
                {/* <span className="hidden lg:block lg:mr-3">Compare</span> */}
                {/* <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9,7 L7,7 L7,9 L9,9 L9,11 L11,11 L11,9 L13,9 L13,7 L11,7 L11,5 L9,5 L9,7 L9,7 Z M2,1.99079514 C2,0.891309342 2.89451376,0 3.99406028,0 L16.0059397,0 C17.1072288,0 18,0.898212381 18,1.99079514 L18,20 L10,16 L2,20 L2,1.99079514 L2,1.99079514 Z M4,2 L16,2 L16,17 L10,14 L4,17 L4,2 L4,2 Z"></path></svg> */}
              </button>
            </li>
            <li className="ml-4 block md:hidden">
              <button type="button" className="text-gray-700 bg-white-400 hover:bg-white-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
              </button>
            </li>
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
