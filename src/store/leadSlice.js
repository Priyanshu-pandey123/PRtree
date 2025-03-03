import { backendLeadUrl } from "../constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const leadBaseQuery = fetchBaseQuery({
  baseUrl: backendLeadUrl,
  credentials: "include",
});

export const leadApi = createApi({
  reducerPath: "leadApi",
  baseQuery: leadBaseQuery,
  endpoints: (builder) => ({
    createLead: builder.mutation({
      query: (leadData) => ({
        url: "/create",
        method: "POST",
        body: leadData,
      }),
    }),
  }),
});

export const { useCreateLeadMutation } = leadApi;

export default leadApi;
