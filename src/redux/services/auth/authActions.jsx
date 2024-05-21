import {apiSlice} from './api';

export const authActions = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/signin',
        method: POST,
        body: {...credentials},
      }),
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/auth/signup',
        method: POST,
        body: {...credentials},
      }),
    }),
  }),
});

export const {useLoginMutation} = authActions;
