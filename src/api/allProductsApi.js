import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVICE_URL;

export const allProductsApi = createApi({
  reducerPath: 'allProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => ({
        url: 'products/list',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsp4Dtm4giLCJpZCI6NSwiZXhwIjoxNjYyODA1NjE5LCJlbWFpbCI6IndsZ25zQG5hdmVyLmNvbSJ9.3AS4Xmm_UNN-4lDp-X6qGKq7VQUAVrdmElA8ncb_VoqIjOx3eE60rqzbYhaDAjCSwgIK3if9uzXgi1hkacoyKw',
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = allProductsApi;
