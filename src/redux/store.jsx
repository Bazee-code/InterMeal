import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './services/auth/api';
import authReducer from './services/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
