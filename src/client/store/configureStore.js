import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

const middlewares = [];

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    , window.devToolsExtension ? window.devToolsExtension() : f => f // for chrome devToolsExtension
  ));
  return store;
}
