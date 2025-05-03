import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
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
    getUsers: builder.query({
      query: (filters) => {
        const filteredParams = Object.fromEntries(
          Object.entries(filters).filter(([, value]) => value !== "")
        );

        const params = new URLSearchParams(filteredParams);
        return `user?${params.toString()}`;
      },
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `user/role/${userId}`,
        method: "PUT",
        body: { role },
      }),
    }),
    getUserAccountDetails: builder.query({
      query: () => `user/me`,
      providesTags: ["User"],
    }),
    editUserInfo: builder.mutation({
      query: (data) => ({
        url: `user`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserRoleMutation,
  useGetUserAccountDetailsQuery,
  useEditUserInfoMutation,
} = usersApi;
