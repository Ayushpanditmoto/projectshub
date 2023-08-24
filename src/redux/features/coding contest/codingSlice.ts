import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CodingContestState {
  Leetcode: {
    leetcode: any[];
    isLoading: boolean;
    isError: boolean;
    isSuccessful: boolean;
    message: string;
  };
  Codechef: {
    codechef: any[];
    isLoading: boolean;
    isError: boolean;
    isSuccessful: boolean;
    message: string;
  };
  Codeforces: {
    codeforces: any[];
    isLoading: boolean;
    isError: boolean;
    isSuccessful: boolean;
    message: string;
  };
}

const initialState: CodingContestState = {
  Leetcode: {
    leetcode: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: "",
  },
  Codechef: {
    codechef: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: "",
  },
  Codeforces: {
    codeforces: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: "",
  },
};

const Api: any = {
  fetchCodeforceContest: async () => {
    const response = await fetch("https://kontests.net/api/v1/codeforces");
    const data: CodingContestState = await response.json();
    return data;
  },
  fetchLeeCodeContest: async () => {
    const response = await fetch("https://kontests.net/api/v1/leet_code");
    const data: CodingContestState = await response.json();
    return data;
  },
  fetchCodechefContest: async () => {
    const response = await fetch("https://kontests.net/api/v1/code_chef");
    const data: CodingContestState = await response.json();
    return data;
  },
};

export const fetchLeeCodeContest = createAsyncThunk<any[], void>(
  "codingContest/fetchLeeCodeContest",
  Api.fetchLeeCodeContest
);

export const fetchCodechefContest = createAsyncThunk<any[], void>(
  "codingContest/fetchCodechefContest",
  Api.fetchCodechefContest
);

export const fetchCodeforceContest = createAsyncThunk<any[], void>(
  "codingContest/fetchCodeforceContest",
  Api.fetchCodeforceContest
);

const codingContest = createSlice({
  name: "codingContest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLeeCodeContest.pending, (state) => {
      state.Leetcode.isLoading = true;
    });
    builder.addCase(fetchLeeCodeContest.fulfilled, (state, action) => {
      state.Leetcode.isLoading = false;
      state.Leetcode.isSuccessful = true;
      state.Leetcode.leetcode = action.payload;
    });
    builder.addCase(fetchLeeCodeContest.rejected, (state) => {
      state.Leetcode.isLoading = false;
      state.Leetcode.isError = true;
    });
    builder.addCase(fetchCodechefContest.pending, (state) => {
      state.Codechef.isLoading = true;
    });
    builder.addCase(fetchCodechefContest.fulfilled, (state, action) => {
      state.Codechef.isLoading = false;
      state.Codechef.isSuccessful = true;
      state.Codechef.codechef = action.payload;
    });
    builder.addCase(fetchCodechefContest.rejected, (state) => {
      state.Codechef.isLoading = false;
      state.Codechef.isError = true;
    });
    builder.addCase(fetchCodeforceContest.pending, (state) => {
      state.Codeforces.isLoading = true;
    });
    builder.addCase(fetchCodeforceContest.fulfilled, (state, action) => {
      state.Codeforces.isLoading = false;
      state.Codeforces.isSuccessful = true;
      state.Codeforces.codeforces = action.payload;
    });
    builder.addCase(fetchCodeforceContest.rejected, (state) => {
      state.Codeforces.isLoading = false;
      state.Codeforces.isError = true;
    });
  },
});

export default codingContest.reducer;
