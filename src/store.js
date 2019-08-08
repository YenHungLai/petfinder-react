import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import temp from './reducers/index';

const store = createStore(temp, applyMiddleware(logger));

export default store;
