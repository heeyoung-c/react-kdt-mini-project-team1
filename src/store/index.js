import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from './slices/counterSlice';
import { keyword } from './slices/keywordSlice';
import { productsApi } from '~/api/productsApi';
import { searchApi } from '~/api/searchApi';
// CustomProducts
import { customApi } from '../api/customApi';
// etc
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    keyword: keyword.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    // customer rtq query
    [customApi.reducerPath]: customApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      [productsApi.middleware, searchApi.middleware],
      logger,
    ),
});

setupListeners(store.dispatch);
export default store;
