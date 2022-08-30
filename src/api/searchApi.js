import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVICE_URL;

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: builder => ({
    getSearchProducts: builder.query({
      query: payload => ({
        url: `products/search?searchCondition=${payload.title}&searchKeyword=${payload.keyword}`,
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjY2MiLCJpZCI6MSwiZXhwIjoxNjYyNzA5OTE3LCJlbWFpbCI6ImNjY0BnbWFpbC5jb20ifQ.PDkAVJt7VlpOzixtjIkdmFKUcX1efNM6L8P3CNxiEe3as0gHKdQ-gDrmRaktyY2dJE5uzBlHjRoindljeqO5Kg',
        },
      }),
    }),
  }),
});

export const { useGetSearchProductsQuery } = searchApi;
