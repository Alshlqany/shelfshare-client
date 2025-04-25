import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
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
    getBooks: builder.query({
      query: (filters) => {
        const filteredParams = Object.fromEntries(
          Object.entries(filters).filter(([, value]) => value !== "")
        );

        const params = new URLSearchParams(filteredParams);
        return `book?${params.toString()}`;
      },
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `book/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `book/${id}`,
        method: "DELETE",
      }),
    }),
    addBook: builder.mutation({
      query: (formData) => ({
        url: `book`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddBookMutation,
} = booksApi;
