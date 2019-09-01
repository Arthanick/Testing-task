import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from './reducer';

export default function (initial, {log = false} = {}) {
  const middlewares = [];
  if (log) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    combineReducers({
      pages: reducer,
    }),
    initial,
    compose(
      applyMiddleware(...middlewares),
    ),
  );

  /* eslint-disable global-require */
  if (module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(require('./reducer').default));
  }
  /* eslint-enable global-require */

  return store;
}