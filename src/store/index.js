import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from './slices/counterSlice';
import { productsApi } from '~/api/productsApi';
// CustomProducts
import { customApi } from '../api/customApi';
// etc
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    // customer rtq query
    [customApi.reducerPath]: customApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware, logger),
});

setupListeners(store.dispatch);
export default store;
