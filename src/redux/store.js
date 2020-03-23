import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
//import logger from 'redux-logger';
import rootReducer from './root-reducer';

// for future middleware updates
const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

