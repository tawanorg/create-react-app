import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the browsePage state domain
 */

const selectBrowsePageDomain = state => state.browsePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BrowsePage
 */

const makeSelectBrowsePage = () =>
  createSelector(
    selectBrowsePageDomain,
    substate => substate,
  );

export default makeSelectBrowsePage;
export { selectBrowsePageDomain };
