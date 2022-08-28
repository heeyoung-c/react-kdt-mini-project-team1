import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVICE_URL;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: builder => ({
    getWishProducts: builder.query({
      query: () => 'bookmarks/1',
    }),
  }),
});

export const { useGetWishProductsQuery } = productsApi;
