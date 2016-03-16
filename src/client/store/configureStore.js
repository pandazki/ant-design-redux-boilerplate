import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

import { apiMiddleware } from 'redux-api-middleware';

const middlewares = [
  apiMiddleware
];

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    , window.devToolsExtension ? window.devToolsExtension() : f => f // for chrome devToolsExtension
  ));
  return store;
}
