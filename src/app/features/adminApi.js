import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shelfshare-v2.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: (params) => {
        const qParams = new URLSearchParams(params);
        return `stats?${qParams.toString()}`;
      },
    }),
  }),
});

export const { useGetStatisticsQuery } = adminApi;
