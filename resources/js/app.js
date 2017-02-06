/*global document */

import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/rootReducer'
import { Router, Route, browserHistory } from 'react-router';

import ContainerA from './containers/containerA'
import ContainerB from './containers/containerB'

const initialState = initialStateFromBackend;

let store = createStore(
  RootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ContainerA}/>
      <Route path="/a" component={ContainerA}/>
      <Route path="/b" component={ContainerB}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
