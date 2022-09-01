import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const url = import.meta.env.VITE_SERVICE_URL;
export const customApi = createApi({
  reducerPath: 'postApi',

  baseQuery: fetchBaseQuery({
    baseUrl: url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const accessTokenCookies = cookies.get('accessToken');
      if (accessTokenCookies) {
        headers.set('Authorization', `${accessTokenCookies}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: payload => ({
        url: `/products/recommend`,
        method: 'GET',
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
    getPerson: builder.query({
      query: payload => ({
        url: `/member/information`,
        method: 'GET',
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetPersonQuery } = customApi;
