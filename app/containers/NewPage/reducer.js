/*
 *
 * NewPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, NUM_ADD, NUM_DELETE, RESET } from './constants';
// import * as con from './constants';

export const initialState = fromJS({
  num: 0,
});

function newPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case NUM_ADD:
      return state.set('num', state.get('num') + 1);
    case NUM_DELETE:
      return state.set('num', state.get('num') - 1);
    case RESET:
      return state.set('num', action.payload);
    default:
      return state;
  }
}

export default newPageReducer;
