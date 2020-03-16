import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

