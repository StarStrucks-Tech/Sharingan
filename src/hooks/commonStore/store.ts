// import {createStore} from 'redux';
 import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware) 
});
sagaMiddleware.run(productSaga);
// const store = configureStore({reducer:rootReducer});

export default store;