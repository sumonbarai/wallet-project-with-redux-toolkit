import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getViewAllTransactions,
  getViewExpenseTransactions,
  getViewIncomeTransactions,
} from "./filterAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  transactions: [],
};

export const getViewAllTransactionsThunk = createAsyncThunk(
  "filter/getViewAllTransactionsThunk",
  async () => {
    const transactions = await getViewAllTransactions();
    return transactions;
  }
);

export const getViewIncomeTransactionsThunk = createAsyncThunk(
  "filter/getViewIncomeTransactionsThunk",
  async (searchQuery) => {
    const transactions = await getViewIncomeTransactions(searchQuery);
    return transactions;
  }
);
export const getViewExpenseTransactionsThunk = createAsyncThunk(
  "filter/getViewExpenseTransactionsThunk",
  async (searchQuery) => {
    const transactions = await getViewExpenseTransactions(searchQuery);
    return transactions;
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    // getViewAll
    builder
      .addCase(getViewAllTransactionsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getViewAllTransactionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload.reverse();
      })
      .addCase(getViewAllTransactionsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.transactions = [];
      })
      // get income transaction
      .addCase(getViewIncomeTransactionsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getViewIncomeTransactionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload.reverse();
      })
      .addCase(getViewIncomeTransactionsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.transactions = [];
      })
      // get expense transaction
      .addCase(getViewExpenseTransactionsThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getViewExpenseTransactionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload.reverse();
      })
      .addCase(getViewExpenseTransactionsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.transactions = [];
      });
  },
});

export default filterSlice.reducer;
