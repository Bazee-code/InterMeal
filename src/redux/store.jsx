import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './services/auth/api';

const store = configureStore({
  reducer: {
    auth,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
