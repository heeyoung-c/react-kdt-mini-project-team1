import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const url = import.meta.env.VITE_SERVICE_URL;

export const searchApi = createApi({
  reducerPath: 'searchApi',
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
    getSearchProducts: builder.query({
      query: payload => ({
        url: `products/search?searchCondition=${payload.title}&searchKeyword=${payload.keyword}`,
        method: 'GET',
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
  }),
});

export const { useGetSearchProductsQuery } = searchApi;
