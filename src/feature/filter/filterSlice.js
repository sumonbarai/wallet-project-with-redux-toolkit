import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getViewAllTransactions } from "./filterAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  all: [],
  filterByIncome: [],
  filterByExpense: [],
};

export const getViewAllTransactionsThunk = createAsyncThunk(
  "filter/getViewAllTransactions",
  async () => {
    const transactions = await getViewAllTransactions();
    return transactions;
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getViewAllTransactionsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getViewAllTransactionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.all = action.payload.reverse();
        state.filterByIncome = [];
        state.filterByExpense = [];
      })
      .addCase(getViewAllTransactionsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.all = [];
        state.filterByIncome = [];
        state.filterByExpense = [];
      });
  },
});

export default filterSlice.reducer;
