import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const view_key = import.meta.env.VITE_SOME_KEY;
export const customApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: view_key,
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = customApi;
