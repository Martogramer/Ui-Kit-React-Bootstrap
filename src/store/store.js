import { configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "../services/getClients";
import { user } from "../services/user";
import { authApi, signUpApi } from "../services/authApi";
import registerSlice from "services/registerSlice";
import { getUsersAPI } from "services/getUsers";
import { userApi } from "services/getUsers";
import { productsApi } from "../services/productsApi";


export const store = configureStore({
  reducer: {
    [signUpApi.reducerPath]: signUpApi.reducer,
    register: registerSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([clientsApi.middleware], [signUpApi.middleware], [productsApi.middleware], [authApi.middleware], [userApi.middleware])
});

export const selectRegister = (state) => state.register;
