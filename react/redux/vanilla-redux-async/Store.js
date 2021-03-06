import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Actions from './Actions';
import peopleReducer from './reducers/peopleReducer';
import carsReducer from './reducers/carsReducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  cars: carsReducer,
});

const errorHandler = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('Error: ', JSON.stringify(e.message));
  }
};

const Store = createStore(rootReducer, {}, applyMiddleware(logger, thunk, errorHandler));

export default Store;
