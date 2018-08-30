import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newPage state domain
 */

const selectNewPageDomain = state => state.get('newPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewPage
 */

const makeSelectNewPage = () =>
  createSelector(selectNewPageDomain, substate => substate.toJS());

const makeSelectNum = () =>
  createSelector(selectNewPageDomain, i => i.get('num'));

export default makeSelectNewPage;
export { selectNewPageDomain, makeSelectNum };
