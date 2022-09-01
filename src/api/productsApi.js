import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVICE_URL;
const accessToken =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsp4Dtm4giLCJpZCI6NSwiZXhwIjoxNjYyODA1NjE5LCJlbWFpbCI6IndsZ25zQG5hdmVyLmNvbSJ9.3AS4Xmm_UNN-4lDp-X6qGKq7VQUAVrdmElA8ncb_VoqIjOx3eE60rqzbYhaDAjCSwgIK3if9uzXgi1hkacoyKw';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: builder => ({
    // 전체 상품 조회
    getAllProducts: builder.query({
      query: () => ({
        url: 'products/list',
        method: 'GET',
        headers: {
          Authorization: accessToken,
        },
      }),
      providesTags: [{ type: 'Products', id: 'ALLLIST' }],
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),

    // 찜 상품 조회
    getWishProducts: builder.query({
      query: () => ({
        url: 'bookmarks/find',
        method: 'GET',
        headers: {
          Authorization: accessToken,
        },
      }),
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),

    // 찜 상품 등록
    addBookMark: builder.mutation({
      query: payload => ({
        url: 'bookmarks/add',
        method: 'POST',
        body: payload,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: result =>
        result ? [{ type: 'Products', id: 'ALLLIST' }] : [],
    }),

    // 찜 상품 삭제
    deleteBookMark: builder.mutation({
      query: id => ({
        url: `bookmarks/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: accessToken,
        },
      }),
    }),

    // 장바구니 상품 조회
    getCartsProducts: builder.query({
      query: () => ({
        url: 'carts/find',
        method: 'GET',
        headers: {
          Authorization: accessToken,
        },
      }),
      providesTags: [{ type: 'Products', id: 'CARTSLIST' }],
      transformResponse: responseData => {
        return responseData['data'];
      },
    }),

    // 장바구니 상품 등록
    addCartsProducts: builder.mutation({
      query: payload => ({
        url: 'carts/add',
        method: 'POST',
        body: payload,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: result =>
        result ? [{ type: 'Products', id: 'CARTSLIST' }] : [],
    }),

    // 장바구니 상품 단일 삭제
    deleteCartProduct: builder.mutation({
      query: id => ({
        url: `carts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetWishProductsQuery,
  useAddBookMarkMutation,
  useDeleteBookMarkMutation,
  useGetCartsProductsQuery,
  useAddCartsProductsMutation,
  useDeleteCartProductMutation,
} = productsApi;
