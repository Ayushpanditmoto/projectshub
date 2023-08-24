import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contest } from "../../../types/contest";

interface CodingContestState {
  Leetcode: {
    data: Contest[];
    isLoading: boolean;
    isError: boolean;
    isSuccessful: boolean;
    message: string;
  };
  Codechef: {
    data: Contest[];
    isLoading: boolean;
    isError: boolean;
    isSuccessful: boolean;
    message: string;
  };
  Codeforces: {
    data: Contest[];
    isLoading: boolean;
    isError: boolean;
    isSuccessful: boolean;
    message: string;
  };
}

const initialState: CodingContestState = {
  Leetcode: {
    data: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: "",
  },
  Codechef: {
    data: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: "",
  },
  Codeforces: {
    data: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: "",
  },
};

const Api: any = {
  Leetcode: "https://kontests.net/api/v1/leet_code",
  Codechef: "https://kontests.net/api/v1/code_chef",
  Codeforces: "https://kontests.net/api/v1/codeforces",
};

export const fetchLeeCodeContest = createAsyncThunk<any[], void>(
  "coding/fetchLeeCodeContest",
  async () => {
    console.log("fetching leetcode contest");
    const response = await fetch(Api.Leetcode);
    const data = await response.json();
    console.log(`leetcode data: ${data}`);
    return data;
  }
);

export const fetchCodechefContest = createAsyncThunk<any[], void>(
  "coding/fetchCodechefContest",
  async () => {
    console.log("fetching codechef contest");
    const response = await fetch(Api.Codechef);
    const data = await response.json();
    console.log(`codechef data: ${data}`);
    return data;
  }
);

export const fetchCodeforceContest = createAsyncThunk<any[], void>(
  "coding/fetchCodeforceContest",
  async () => {
    console.log("fetching codeforce contest");
    const response = await fetch(`https://kontests.net/api/v1/codeforces`);
    const data = await response.json();
    console.log(`codeforce data: ${data}`);
    return data;
  }
);

export const codingContest = createSlice({
  name: "coding",
  initialState,
  reducers: {
    resetContest: (state) => {
      state.Leetcode = initialState.Leetcode;
      state.Codechef = initialState.Codechef;
      state.Codeforces = initialState.Codeforces;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeeCodeContest.pending, (state) => {
        state.Leetcode.isLoading = true;
      })
      .addCase(fetchLeeCodeContest.fulfilled, (state, action) => {
        state.Leetcode.isLoading = false;
        state.Leetcode.isSuccessful = true;
        state.Leetcode.data = action.payload;
      })
      .addCase(fetchLeeCodeContest.rejected, (state) => {
        state.Leetcode.isLoading = false;
        state.Leetcode.isError = true;
      });
    builder
      .addCase(fetchCodechefContest.pending, (state) => {
        state.Codechef.isLoading = true;
      })
      .addCase(fetchCodechefContest.fulfilled, (state, action) => {
        state.Codechef.isLoading = false;
        state.Codechef.isSuccessful = true;
        state.Codechef.data = action.payload;
      })
      .addCase(fetchCodechefContest.rejected, (state) => {
        state.Codechef.isLoading = false;
        state.Codechef.isError = true;
      });
    builder
      .addCase(fetchCodeforceContest.pending, (state) => {
        state.Codeforces.isLoading = true;
      })
      .addCase(fetchCodeforceContest.fulfilled, (state, action) => {
        state.Codeforces.isLoading = false;
        state.Codeforces.isSuccessful = true;
        state.Codeforces.data = action.payload;
      })
      .addCase(fetchCodeforceContest.rejected, (state) => {
        state.Codeforces.isLoading = false;
        state.Codeforces.isError = true;
      });
  },
});

export const { resetContest } = codingContest.actions;
export default codingContest.reducer;
