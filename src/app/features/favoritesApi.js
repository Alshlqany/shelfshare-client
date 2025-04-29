import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shelfshare-v2.vercel.app/api/favorite",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: (page) => {
        return `?page=${page}`;
      },
    }),

    toggleFavorite: builder.mutation({
      query: (bookId) => ({
        // {bookId:"bookId"}
        url: `toggle`,
        method: "POST",
        body: { bookId },
      }),
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useToggleFavoriteMutation,
} = favoritesApi;
