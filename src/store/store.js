import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice";
import { leadApi } from "./leadSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [leadApi.reducerPath]: leadApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, leadApi.middleware),
});
