import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
