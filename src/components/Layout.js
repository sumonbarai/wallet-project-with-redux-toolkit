import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTransactionsThunk } from "../feature/transaction/transactionSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
};

export default Layout;
