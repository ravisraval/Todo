import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { allTodos } from './reducers/selectors'
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import thunkMiddleware from './middleware/thunk';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.allTheTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.fetchTodos = fetchTodos;
  window.thunkMiddleware = thunkMiddleware;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
