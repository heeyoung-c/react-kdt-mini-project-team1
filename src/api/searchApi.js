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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsp4Dtm4giLCJpZCI6NSwiZXhwIjoxNjYyODA1NjE5LCJlbWFpbCI6IndsZ25zQG5hdmVyLmNvbSJ9.3AS4Xmm_UNN-4lDp-X6qGKq7VQUAVrdmElA8ncb_VoqIjOx3eE60rqzbYhaDAjCSwgIK3if9uzXgi1hkacoyKw',
        },
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),
  }),
});

export const { useGetSearchProductsQuery } = searchApi;
