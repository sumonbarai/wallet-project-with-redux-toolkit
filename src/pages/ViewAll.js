import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Transaction from "../components/Transactions/Transaction";
import {
  getViewAllTransactionsThunk,
  getViewExpenseTransactionsThunk,
  getViewIncomeTransactionsThunk,
} from "../feature/filter/filterSlice";
import "./ViewAll.css";

const ViewAll = () => {
  const [type, setType] = useState("all");
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.filter
  );
  // what is render ?
  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>There are some error</p>;
  }
  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transaction available</p>;
  }
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((singleTransaction) => (
      <Transaction
        key={singleTransaction.id}
        singleTransaction={singleTransaction}
      ></Transaction>
    ));
  }

  useEffect(() => {
    if (type === "all") {
      dispatch(getViewAllTransactionsThunk());
    } else if (type === "income") {
      dispatch(getViewIncomeTransactionsThunk("type_like=income"));
    } else if (type === "expense") {
      dispatch(getViewExpenseTransactionsThunk("type_like=expense"));
    }
  }, [dispatch, type]);

  return (
    <div className="viewAll" style={{ width: "100%" }}>
      <h2>all transaction show</h2>
      <div className="filter-area">
        <div className="left-area">
          Filters :
          <span>
            <input
              type="radio"
              name="filter"
              id="all"
              checked={type === "all"}
              onChange={() => setType("all")}
            />
            <label htmlFor="all">All</label>
            <input
              type="radio"
              name="filter"
              id="income"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label htmlFor="income">income</label>
            <input
              type="radio"
              name="filter"
              id="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label htmlFor="expense">expense</label>
          </span>
        </div>
        <div className="right-area">
          <input type="text" placeholder="Search By Name" />
        </div>
      </div>
      <ul style={{ width: "100%" }}>{content}</ul>
    </div>
  );
};

export default ViewAll;
