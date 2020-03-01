/**
 *
 * Layout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Layout() {}

Layout.MainContent = ({ children }) => (
  <div className="pt-16">
    <div className="relative container">
      {children}
    </div>
  </div>
)

Layout.propTypes = {};

export default Layout;
