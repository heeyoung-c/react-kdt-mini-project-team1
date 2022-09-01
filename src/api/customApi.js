import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const view_key = import.meta.env.VITE_SERVICE_URL;
export const customApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: view_key,
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: payload => ({
        url: `/products/recommend`,
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGluIiwiaWQiOjcsImV4cCI6MTY2MjgwNzE0MywiZW1haWwiOiJndXF0bHM4NUBkYXVtLmNvbSJ9.YgeykawP6mQgo1x4zpne9YvT9Vs9cNSiLxfLj89hvnMMO8l-yJSSiMavDGBYlTR8z1e9htZpMc_KWU_k4B8Eyg',
        },
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
    getPerson: builder.query({
      query: payload => ({
        url: `/member/information`,
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGluIiwiaWQiOjcsImV4cCI6MTY2MjgwNzE0MywiZW1haWwiOiJndXF0bHM4NUBkYXVtLmNvbSJ9.YgeykawP6mQgo1x4zpne9YvT9Vs9cNSiLxfLj89hvnMMO8l-yJSSiMavDGBYlTR8z1e9htZpMc_KWU_k4B8Eyg',
        },
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetPersonQuery } = customApi;
