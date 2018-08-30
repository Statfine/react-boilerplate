/*
 *
 * NewPage actions
 *
 */

// import { DEFAULT_ACTION } from './constants';
import * as con from './constants';

export function defaultAction() {
  return {
    type: con.DEFAULT_ACTION,
  };
}

export function actionAdd() {
  return {
    type: con.NUM_ADD,
  };
}
export function actionDelete() {
  return {
    type: con.NUM_DELETE,
  };
}
export function actionReset(payload) {
  return {
    type: con.RESET,
    payload,
  };
}
