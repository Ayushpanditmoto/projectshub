import { TypedUseSelectorHook } from "./../../node_modules/react-redux/es/types.d";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./features/auth-slice";
import codingReducer from "./features/coding contest/codingSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    codingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
