import {
  CALL_API
} from 'redux-api-middleware';

export const CHANGE = 'CHANGE';
export function change(value) {
  return {
    type: CHANGE,
    value,
  };
}

export const COUNTER_QUERY_SUCCESS = 'COUNTER_QUERY_SUCCESS';
export function query() {
  return {
    [CALL_API]: {
      endpoint: 'http://www.mocky.io/v2/56e97b4710000072016c1857', // always return {"value": 1000}
      method: 'GET',
      types: ['REQUEST', COUNTER_QUERY_SUCCESS, 'FAILURE']
    }
  };
}
