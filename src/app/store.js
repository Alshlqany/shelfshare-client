import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/authApi";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";
import { adminApi } from "./features/adminApi";
import { booksApi } from "./features/booksApi";
import { usersApi } from "./features/usersApi";
import { ordersApi } from "./features/ordersApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      adminApi.middleware,
      booksApi.middleware,
      usersApi.middleware,
      ordersApi.middleware
    ),
});
