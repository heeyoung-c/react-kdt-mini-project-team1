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
  }),
});

export const { useSignUpMutation } = authApi;
