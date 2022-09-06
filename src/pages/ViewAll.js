import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Transaction from "../components/Transactions/Transaction";
import { getViewAllTransactionsThunk } from "../feature/filter/filterSlice";
import "./ViewAll.css";

const ViewAll = () => {
  const dispatch = useDispatch();
  const { all, isLoading, isError } = useSelector((state) => state.filter);

  // what is render ?
  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>There are some error</p>;
  }
  if (!isLoading && !isError && all?.length === 0) {
    content = <p>No transaction available</p>;
  }
  if (!isLoading && !isError && all?.length > 0) {
    content = all.map((singleTransaction) => (
      <Transaction
        key={singleTransaction.id}
        singleTransaction={singleTransaction}
      ></Transaction>
    ));
  }

  useEffect(() => {
    dispatch(getViewAllTransactionsThunk());
  }, [dispatch]);

  return (
    <div className="viewAll" style={{ width: "100%" }}>
      <h2>all transaction show</h2>
      <div className="filter-area">
        <div className="left-area">
          Filters :
          <span>
            <input type="radio" name="filter" id="all" checked />
            <label htmlFor="all">All</label>
            <input type="radio" name="filter" id="income" />
            <label htmlFor="income">income</label>
            <input type="radio" name="filter" id="expense" />
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
