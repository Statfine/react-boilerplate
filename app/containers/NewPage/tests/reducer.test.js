import { fromJS } from 'immutable';
import newPageReducer from '../reducer';

describe('newPageReducer', () => {
  it('returns the initial state', () => {
    expect(newPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
