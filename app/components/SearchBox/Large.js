/**
 *
 * SearchBoxLarge
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SearchBoxLarge() {
  return (
    <div className="flex flex-col">
      <div className="relative w-full shadow-lg rounded">
        <div className="relative flex-auto flex">
          <input
            className="relative text-xl text-gray-800 transition-colors duration-100 ease-in-out focus:outline-0 rounded border-transparent focus:border-white placeholder-gray-600 bg-white py-5 pr-6 pl-16 block w-full appearance-none leading-normal focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Subject or qualification, eg. IT"
            maxLength="20"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-6 flex items-center">
            <svg className="fill-current pointer-events-none text-gray-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </div>
        </div>
        <div className="hidden absolute right-0 top-0 bottom-0 md:flex items-center pr-4">
          <button className="bg-blue-500 hover:bg-blue-800 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500">
            Search
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center mt-1 w-full">
        <button className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500">
          Search
        </button>
      </div>
    </div>
  )
}

SearchBoxLarge.propTypes = {};

export default SearchBoxLarge;
