import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "./../../node_modules/react-redux/es/types.d";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
