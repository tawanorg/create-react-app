/**
 *
 * AdvisorPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAdvisorPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AdvisorPage() {
  useInjectReducer({ key: 'advisorPage', reducer });
  useInjectSaga({ key: 'advisorPage', saga });

  return (
    <div>
      <Helmet>
        <title>AdvisorPage</title>
        <meta name="description" content="Description of AdvisorPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AdvisorPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  advisorPage: makeSelectAdvisorPage(),
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
)(AdvisorPage);
