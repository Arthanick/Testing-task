import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createStorageMiddleware, { getStorageState } from 'redux-simple-storage-middleware';
import reducer from './reducer';

export default function (initial, { log = false } = {}) {
  const localStorageMiddleware = createStorageMiddleware({
    key: 'userStorage',
  });

  const storageState = getStorageState({
    key: 'userStorage',
  });

  const store = createStore(
    combineReducers({
      pages: reducer,
    }),
    storageState,
    compose(
      applyMiddleware(localStorageMiddleware),
    ),
  );

  /* eslint-disable global-require */
  if (module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(require('./reducer').default));
  }
  /* eslint-enable global-require */

  return store;
}