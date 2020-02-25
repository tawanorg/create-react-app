/**
 *
 * SectionHowDoesItWork
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SectionHowDoesItWork() {
  return (
    <div className="border-b pb-10 bg-gray-200">
      <div className="container mx-auto items-center flex flex-col">
        <h2 className="text-3xl my-12">How StudyAdder Can Help You</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="bg-white max-w-sm rounded overflow-hidden shadow flex items-center flex-col pt-8 pb-2">
            <img className="w-24 md:w-40" src="https://studee.com/icons/icon__fact--univeristy-programs.png" />
            <div className="px-6 py-4 flex flex-col text-center">
              <div className="font-normal text-md leading-normal md:font-semibold md:text-xl">Universities & programs</div>
              <p className="hidden md:block font-normal text text-center">Find the right program for you and your career aspirations</p>
            </div>
          </div>
          <div className="bg-white max-w-sm rounded overflow-hidden shadow flex items-center flex-col pt-8 pb-2">
            <img className="w-24 md:w-40" src="https://studee.com/icons/icon__fact--application-assistance.png" />
            <div className="px-6 py-4 flex flex-col text-center">
              <div className="font-normal text-md leading-normal md:font-semibold md:text-xl">Application assistance</div>
              <p className="hidden md:block font-normal text text-center">Be guided through your application process</p>
            </div>
          </div>
          <div className="bg-white max-w-sm rounded overflow-hidden shadow flex items-center flex-col pt-8 pb-2">
            <img className="w-24 md:w-40" src="https://studee.com/icons/icon__fact--visa-and-embassy-guidance.png" />
            <div className="px-6 py-4 flex flex-col text-center">
              <div className="font-normal text-md leading-normal md:font-semibold md:text-xl">Visa & embassy guidance</div>
              <p className="hidden md:block font-normal text text-center">Maximise your chances of being granted a visa</p>
            </div>
          </div>
          <div className="bg-white max-w-sm rounded overflow-hidden shadow flex items-center flex-col pt-8 pb-2">
            <img className="w-24 md:w-40" src="https://studee.com/icons/icon__fact--enrollment-and-travel-advice.png" />
            <div className="px-6 py-4 flex flex-col text-center">
              <div className="font-normal text-md leading-normal md:font-semibold md:text-xl">Enrollment & travel advice</div>
              <p className="hidden md:block font-normal text text-center">Get support all the way to your first day at University</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-20">
          <div className="mr-8 p-6 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex" role="alert">
            <span className="font-semibold mx-2 text-left flex-auto text-lg">Find an institution</span>
            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
            </svg>
          </div>
          <div className="p-6 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex" role="alert">
            <span className="font-semibold mx-2 text-left flex-auto text-lg">Find a course</span>
            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionHowDoesItWork.propTypes = {};

export default SectionHowDoesItWork;
