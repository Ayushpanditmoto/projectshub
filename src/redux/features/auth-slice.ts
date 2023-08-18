import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  value: {
    token: string | null;
    uid: string;
    isAuthenticated: boolean;
    error: string;
    isLoading?: boolean;
  };
}

const initialState: AuthState = {
  value: {
    token: null,
    uid: "",
    isAuthenticated: false,
    error: "",
    isLoading: false,
  },
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoGIN_SUCCESS(state, action: PayloadAction<string>) {
      return {
        value: {
          token: action.payload,
          uid: "",
          isAuthenticated: true,
          error: "",
          isLoading: false,
        },
      };
    },
    LoGIN_LOADING(state) {
      return {
        value: {
          token: null,
          uid: "",
          isAuthenticated: false,
          error: "",
          isLoading: true,
        },
      };
    },
    LoGIN_FAILED(state, action: PayloadAction<string>) {
      return {
        value: {
          token: null,
          uid: "",
          isAuthenticated: false,
          error: action.payload,
          isLoading: false,
        },
      };
    },
    LOGOUT() {
      return initialState;
    },
  },
});

export const { LOGOUT, LoGIN_FAILED, LoGIN_LOADING, LoGIN_SUCCESS } =
  auth.actions;

export default auth.reducer;
