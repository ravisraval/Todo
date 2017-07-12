import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import thunkMiddleware from '../middleware/thunk';

const configureStore = () => {
  return createStore(RootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore;
