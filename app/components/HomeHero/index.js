/**
 *
 * HomeHero
 *
 */

import React from 'react';
import styled from 'styled-components';
import Tag from 'components/Tag';
import { SearchBoxLarge } from 'components/SearchBox';

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
  background: linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(0, 0, 0, 0.86) 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const tags = [
  'English',
  'Programming',
  'Cookery',
];

function HomeHero() {
  return (
    <div className="pb-10 pt-32 px-6 relative md:pb-20 xl:pt-40 xl:pb-24">
      <div className="container z-20 relative flex flex-col">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug text-white font-semibold">Find your course. <br />Change your life.</h1>
          <h3 className="text-xl leading-snug mt-3 text-white">Discover the perfect university for you</h3>
          <div className="mt-5">
            <SearchBoxLarge />
          </div>
          <ul className="flex flex-row mt-4 flex-wrap ">
            {
              tags.map((title, key) => (
                <Tag as="li" key={key} title={title} popular={key === 0} />
              ))
            }
          </ul>
        </div>
      </div>
      <ImageBackground className="z-10" />
      <DropbackBackground className="z-10" />
    </div>
  );
}

HomeHero.propTypes = {};

export default HomeHero;
