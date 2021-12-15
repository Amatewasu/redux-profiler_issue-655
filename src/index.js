import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';
import profileStore from 'redux-profiler';

const store = createStore(
  reducer,
  undefined,
  compose(
    profileStore(),
    applyMiddleware()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
