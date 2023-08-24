import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import codingReducer from "./features/coding contest/codingSlice";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "./../../node_modules/react-redux/es/types.d";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    coding: codingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
