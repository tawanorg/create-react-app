import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the advisorPage state domain
 */

const selectAdvisorPageDomain = state => state.advisorPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdvisorPage
 */

const makeSelectAdvisorPage = () =>
  createSelector(
    selectAdvisorPageDomain,
    substate => substate,
  );

export default makeSelectAdvisorPage;
export { selectAdvisorPageDomain };
