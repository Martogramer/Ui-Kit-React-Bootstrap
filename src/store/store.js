import { configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "../services/getClients";
import { user } from "../services/user";
import { authApi } from "../services/authApi";

export const store = configureStore({
  reducer: {
    user: user,
    auth: authApi,
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
});
