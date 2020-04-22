import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {logger} from 'redux-logger';
const middlewares = [];

const reactNavigation = createReactNavigationReduxMiddleware(
  (state) => state.router,
  'root',
);

if (__DEV__) {
  middlewares.push(createLogger());
}

middlewares.push(reactNavigation);
middlewares.push(promise);
middlewares.push(logger);

export default middlewares;
