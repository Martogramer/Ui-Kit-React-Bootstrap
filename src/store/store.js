import { configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "../services/getClients";
import { user } from "../services/user";
import { authApi } from "../services/authApi";
import registerSlice from "services/registerSlice";
import { getUsersAPI } from "services/getUsers";
import { userApi } from "services/getUsers";


export const store = configureStore({
  reducer: {
    register: registerSlice,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([clientsApi.middleware] && [authApi.middleware] && [userApi.middleware])
});

export { userApi }

export default store