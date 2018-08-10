import { createStore } from 'redux';
import { rootReducer } from './reducers';
// import apiMiddleware from './apiMiddleware';
// import loggingMiddleware from './loggingMiddleware';

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
