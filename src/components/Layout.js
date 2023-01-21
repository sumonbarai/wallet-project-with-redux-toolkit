import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTransactionsThunk } from "../feature/transaction/transactionSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="header">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>My Wallet Application</h1>
        </Link>
      </div>

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2022 Project Design By me</div>
    </div>
  );
};

export default Layout;
