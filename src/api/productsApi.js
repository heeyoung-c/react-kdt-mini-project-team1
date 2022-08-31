import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVICE_URL;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: builder => ({
    getWishProducts: builder.query({
      query: () => ({
        url: 'products/list',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWFtMSIsImlkIjo0LCJleHAiOjE2NjI4MTA5NjMsImVtYWlsIjoidGVhbTFAZ21haWwuY29tIn0.sOBnKBtk1rFguwsVDFYiWcDmNLXWKMZGHLuLGZFGNwYD0DOSqaXHoLEz504MozfBg_M4oKKgJMB3vLvj58ozIw',
        },
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
  }),
});

export const { useGetWishProductsQuery } = productsApi;
