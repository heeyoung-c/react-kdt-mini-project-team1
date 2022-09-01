import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = import.meta.env.VITE_SERVICE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: builder => ({
    signUp: builder.mutation({
      query: ({ data }) => ({
        url: 'auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
      transformResponse: response => {
        console.log('RTK쿼리쪽', response.data.authorization);

        return response.data.authorization;
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
