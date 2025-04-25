import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const buildQueryParams = (params) =>
  Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (filters) => {
        const queryParams = buildQueryParams(filters);
        return queryParams ? `/order?${queryParams}` : "/order";
      },
    }),
    getOrder: builder.query({
      query: (orderId) => `/order/${orderId}`,
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderQuery } = ordersApi;
