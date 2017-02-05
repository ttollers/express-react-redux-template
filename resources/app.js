/*global document */

import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'
import { Router, Route, browserHistory } from 'react-router';

import Home from './containers/home'
import ChooseTown from './containers/chooseTowns'
import FeedContainer from './containers/feedContainer'

const initialState = {
  towns: null,
  feed: null
};

let store = createStore(
  RootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/a/:postcode" component={ChooseTown} />
      <Route path="/feed/:postcode" component={FeedContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
