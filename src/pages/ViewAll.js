import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import Modal from "../components/Modal/Modal";
import Transaction from "../components/Transactions/Transaction";
import {
  getViewAllTransactionsThunk,
  getViewBySearchTransactionsThunk,
  getViewExpenseTransactionsThunk,
  getViewIncomeTransactionsThunk,
} from "../feature/filter/filterSlice";
import "./ViewAll.css";

const ViewAll = () => {
  const [type, setType] = useState("all");
  const [input, setInput] = useState("");
  const [page, setPage] = useState(0);
  const [sliceStart, setSliceStart] = useState(0);
  const [SliceEnd, setSliceEnd] = useState(10);
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.filter
  );
  const { transactions: render } = useSelector((state) => state.transaction);

  const { modal } = useSelector((state) => state.filter);
  const numberOfPage = Math.ceil(transactions.length / 10);

  useEffect(() => {
    dispatch(getViewAllTransactionsThunk());
  }, [render, dispatch]);

  // what is render ?
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <p>There are some error</p>;
  }
  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transaction available</p>;
  }
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions
      .slice(sliceStart, SliceEnd)
      .map((singleTransaction) => (
        <Transaction
          key={singleTransaction.id}
          singleTransaction={singleTransaction}
        ></Transaction>
      ));
  }

  const handleSearch = (value) => {
    setInput(value);
    setType(value);
  };
  const handlePaginationBtn = (number) => {
    setPage(number);
    setSliceStart(10 * number + 1 - 1);
    setSliceEnd(10 * (number + 1));
  };

  useEffect(() => {
    if (type === "all") {
      setSliceStart(0);
      setSliceEnd(10);
      setPage(0);
      dispatch(getViewAllTransactionsThunk());
    } else if (type === "income") {
      setSliceStart(0);
      setSliceEnd(10);
      setPage(0);
      dispatch(getViewIncomeTransactionsThunk("type_like=income"));
    } else if (type === "expense") {
      setSliceStart(0);
      setSliceEnd(10);
      setPage(0);
      dispatch(getViewExpenseTransactionsThunk("type_like=expense"));
    }
  }, [dispatch, type]);

  useEffect(() => {
    if (input) {
      let timeout = setTimeout(() => {
        setSliceStart(0);
        setSliceEnd(10);
        setPage(0);
        dispatch(getViewBySearchTransactionsThunk(input));
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setType("all");
    }
  }, [dispatch, input]);

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
          <input
            type="search"
            placeholder="Search By Name"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <ul style={{ width: "100%" }}>{content}</ul>

      <div className="pagination">
        {[...Array(numberOfPage).keys()].map((number) => (
          <button
            className={page === number ? "selected" : ""}
            key={number}
            onClick={() => handlePaginationBtn(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      {modal && <Modal></Modal>}
    </div>
  );
};

export default ViewAll;
