import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/auth" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: "verify-otp",
        method: "POST",
        body: otpData,
      }),
    }),
    resendOtp: builder.mutation({
      query: (emailData) => ({
        url: "resend-otp",
        method: "POST",
        body: emailData,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (emailData) => ({
        url: "forget-password",
        method: "POST",
        body: emailData,
      }),
    }),
    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: "reset-password",
        method: "POST",
        body: resetData,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
