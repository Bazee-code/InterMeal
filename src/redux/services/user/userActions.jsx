import {apiSlice} from '../auth/api';

export const userActions = apiSlice.injectEndpoints({
  endpoints: builder => ({
    userDetails: builder.query({
      query: () => ({
        url: '/user-profile',
        method: 'GET',
      }),
    }),
  }),
});

export const {useUserDetailsQuery} = userActions;
