import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
const url = import.meta.env.VITE_SERVICE_URL;
const cookies = new Cookies();

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
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
    // 전체 상품 조회
    getAllProducts: builder.query({
      query: () => ({
        url: 'products/list',
        method: 'GET',
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
      }),
      providesTags: [{ type: 'Products', id: 'BOOKMARKLIST' }],
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
      }),
      invalidatesTags: result =>
        result
          ? [
              { type: 'Products', id: 'ALLLIST' },
              { type: 'Products', id: 'BOOKMARKLIST' },
            ]
          : [],
    }),

    // 찜 상품 삭제
    deleteBookMark: builder.mutation({
      query: id => ({
        url: `bookmarks/${id}`,
        method: 'DELETE',
      }),
    }),

    // 장바구니 상품 조회
    getCartsProducts: builder.query({
      query: () => ({
        url: 'carts/find',
        method: 'GET',
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
      }),
      invalidatesTags: result =>
        result ? [{ type: 'Products', id: 'CARTSLIST' }] : [],
    }),

    // 장바구니 상품 단일 삭제
    deleteCartProduct: builder.mutation({
      query: id => ({
        url: `carts/${id}`,
        method: 'DELETE',
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
