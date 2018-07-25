/**
 * Redux included with help from https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
 **/

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const history = createHistory();

const initialState = {};

const middleware = [
  thunk,
  routerMiddleware(history),
];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
