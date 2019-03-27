import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import users from './reducers/usersReducer';
import orders from './reducers/ordersReducer';

const history = createBrowserHistory();
const routes = {home: '/', login: '/login', dashboard: '/dashboard'};

const { reducer, middleware } = connectRoutes(history, routes);

const store = createStore(
  combineReducers({location: reducer, users: users, orders: orders}),
  {},
  compose(applyMiddleware(thunk, middleware))
);

export default store;