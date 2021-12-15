import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './index';
import { render } from '@testing-library/react';
import { addTodo } from './actions/index';


it('should not crash', () => {
  expect(1).toBe(1);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  store.dispatch(addTodo('test'));
});


it('should not crash fake timers', () => {
  store.dispatch(addTodo('test2'));

  jest.useFakeTimers();
  jest.advanceTimersByTime(499);

  expect(1).toBe(1);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  store.dispatch(addTodo('test2-2'));
});

