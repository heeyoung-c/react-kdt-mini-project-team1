import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

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
        const token = response.data.authorization;

        cookies.set('accessToken', token, { path: '/' });

        return token;
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
