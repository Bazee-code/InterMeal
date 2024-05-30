import {apiSlice} from '../auth/api';

export const fastingActions = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addFastingTime: builder.mutation({
      query: data => ({
        url: '/fastingtime',
        method: 'POST',
        body: {...data},
      }),
    }),
  }),
});

export const {useAddFastingTimeMutation} = fastingActions;
