import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../feature/transaction/transactionSlice";
import filterReducer from "../feature/filter/filterSlice";

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    filter: filterReducer,
  },
});
export default store;
