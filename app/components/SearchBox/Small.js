/**
 *
 * SearchBoxSmall
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SearchBoxSmall() {
  return (
    <div className="relative w-full shadow rounded">
      <div className="relative flex-auto flex">
        <input
          className="relative text text-gray-800 transition-colors duration-100 ease-in-out focus:outline-0 rounded border focus:border-white placeholder-gray-600 bg-white py-2 pr-3 pl-10 block w-full appearance-none leading-normal focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Subject or qualification, eg. IT"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
          <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

SearchBoxSmall.propTypes = {};

export default SearchBoxSmall;
