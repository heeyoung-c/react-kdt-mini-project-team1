import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import counterReducer from './slices/counterSlice'

const logger = createLogger()

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store
