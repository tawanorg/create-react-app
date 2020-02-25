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
        <div className="max-w-sm">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug text-white font-semibold">Find your course. <br />Change your life.</h1>
          <h3 className="text-xl leading-snug mt-3 text-white">Discover the perfect university for you</h3>
          <div className="mt-5">
            <a className="py-5 px-10 bg-indigo-700 hover:bg-indigo-500 duration-500 transition items-center text-indigo-100 leading-none rounded-full flex inline-flex" href="/">
              <span className="font-semibold mr-2 text-left flex-auto">Get Started</span>
              <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </a>
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
