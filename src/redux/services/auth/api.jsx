import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../../utils';
import * as Keychain from 'react-native-keychain';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: async (headers, {endpoint}) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        headers.set('Authorization', `Bearer ${credentials?.session}`);
      } else {
        console.log('no credentials stored');
        headers.set('Authorization', `Bearer ${credentials?.session}`);
      }
    } catch (e) {
      console.log('keychain not accessible', e);
    }

    headers.set('Content-Type', 'application/json');
    headers.set('System-Lang', 'en');
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  //   tagTypes: ['User', 'Producer', 'Noti'],
  endpoints: builder => ({}),
});
