/**
 *
 * BrowsePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Layout from 'components/Layout'
import makeSelectBrowsePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import listOfSchools from './school';

export function BrowsePage() {
  useInjectReducer({ key: 'browsePage', reducer });
  useInjectSaga({ key: 'browsePage', saga });

  return (
    <div>
      <Helmet>
        <title>BrowsePage</title>
        <meta name="description" content="Description of BrowsePage" />
      </Helmet>
      <Layout.MainContent>
        <div className="w-full lg:w-2/3 px-4 md:px-0 my-5">
          <div className="flex flex-wrap -mx-1">
            <div className="w-1/2 px-1 mb-4 md:w-2/5">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                Course name
              </label>
              <input className="appearance-none block w-full bg-white border border-gray-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:outline-none focus:shadow-outline" id="grid-first-name" type="text" value="English" />
            </div>
            <div className="w-1/2 px-1 mb-4 md:w-1/5">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                destination
              </label>
              <input className="appearance-none block w-full bg-white border border-gray-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:outline-none focus:shadow-outline" id="grid-last-name" type="text" value="Melbourne, Australia" />
            </div>
            <div className="w-1/2 px-1 mb-4 md:w-1/5">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                Degree
              </label>
              <input className="appearance-none block w-full bg-white border border-gray-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:outline-none focus:shadow-outline" id="grid-last-name" type="text" value="Diploma" />
            </div>
            <div className="w-1/2 px-1 mb-4 md:w-1/5">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                Intake
              </label>
              <input className="appearance-none block w-full bg-white border border-gray-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:outline-none focus:shadow-outline" id="grid-last-name" type="text" value="2020" />
            </div>
          </div>
          <div className="border border-gray-300 w-full my-3" />
          <div className="relative flex flex-col justify-between items-start md:flex-row md:items-center">
            <span className="leading-relaxed">We have found 12 perfect education providers</span>
            <span className="text-xs">Estimated lowest prices only. Found in the last 8 days.</span>
          </div>
          <div className="relative flex flex-col flex-wrap my-5">
            {
              listOfSchools.map((key) => (
                <Link to="/" class="rounded overflow-hidden shadow bg-white mb-4 hover:shadow-lg cursor-pointer transition duration-200">
                  <div class="px-6 py-4 flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <div class="font-bold text-xl leading-relaxed">{key}</div>
                      <p class="text-gray-700 text-base leading-relaxed">
                        Melbourne CBD, Australia
                      </p>
                    </div>
                    <button className="bg-transparent hover:border-blue-500 text-blue-700 font-semibold p-3 border-2 border-gray-300 hover:border-transparent rounded-full transition duration-200">
                      <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <polygon id="Combined-Shape-Copy" points="16.1715729 9 10.1005051 2.92893219 11.5147186 1.51471863 20 10 19.2928932 10.7071068 11.5147186 18.4852814 10.1005051 17.0710678 16.1715729 11 -5.68434189e-14 11 -5.68434189e-14 9"></polygon>
                      </svg>
                    </button>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </Layout.MainContent>
    </div>
  );
}

BrowsePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  browsePage: makeSelectBrowsePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BrowsePage);
