import { configureStore } from '@reduxjs/toolkit';
import { keyword } from './slices/keywordSlice';
import { searchProducts } from './slices/searchSlice';
import { productsApi } from '~/api/productsApi';
import { searchApi } from '~/api/searchApi';
// SignUp, SignIn
import { authApi } from '../api/authApi';
// CustomProducts
import { customApi } from '../api/customApi';
// etc
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    keyword: keyword.reducer,
    searchProducts: searchProducts.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // customer rtq query
    [customApi.reducerPath]: customApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      searchApi.middleware,
      customApi.middleware,
      authApi.middleware,
    ]),
});

setupListeners(store.dispatch);
export default store;
