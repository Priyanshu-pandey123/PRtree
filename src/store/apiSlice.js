import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backendUrl } from "../constant";

const baseQuery = fetchBaseQuery({
  baseUrl: backendUrl,
  credentials: "include",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "/resetPasswordlink",
        method: "POST",
        body: passwordData,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ id, passwordData }) => ({
        url: `/resetPassword/${id}`, // Corrected dynamic URL
        method: "POST",
        body: passwordData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useChangePasswordMutation,
  useLogoutMutation,
  useResetPasswordMutation,
} = authApi;

export default authApi;
