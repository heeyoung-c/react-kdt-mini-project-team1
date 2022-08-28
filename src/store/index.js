import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from './slices/counterSlice';
// CustomProducts
import { customApi } from '../api/customApi';
// etc
import { setupListeners } from '@reduxjs/toolkit/dist/query';
const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // customer rtq query
    [customApi.reducerPath]: customApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

setupListeners(store.dispatch);

export default store;
