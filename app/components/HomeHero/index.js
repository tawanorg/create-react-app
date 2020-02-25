/**
 *
 * HomeHero
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageBackground = styled.div`
  background-image:url(https://www.reed.co.uk/courses/resources/responsive/images/home/homepage-hero.jpg);
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center 50px;
`;

const DropbackBackground = styled.div`
  background: linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgb(0, 77, 102) 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function HomeHero() {
  return (
    <div className="bg-gray-300 py-32 px-6 relative xl:py-40">
      <div className="container z-20 relative flex flex-col">
        <div className="max-w-lg w-full">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug text-white font-semibold">Find your course. <br />Change your life.</h1>
          <h3 className="text-xl leading-snug mt-3 text-white">Discover the perfect university for you</h3>
          <div className="mt-5">
            <div className="relative w-full shadow-lg rounded">
              <div className="relative flex-auto flex">
                <input className="relative text-xl text-gray-800 transition-colors duration-100 ease-in-out focus:outline-0 rounded border-transparent focus:border-white placeholder-gray-600 bg-white py-5 pr-6 pl-16 block w-full appearance-none leading-normal focus:outline-none focus:shadow-outline" type="text" placeholder="Subject or qualification, eg. IT" />
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-6 flex items-center">
                  <svg className="fill-current pointer-events-none text-gray-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageBackground className="z-10" />
      <DropbackBackground className="z-10" />
    </div>
  );
}

HomeHero.propTypes = {};

export default HomeHero;
