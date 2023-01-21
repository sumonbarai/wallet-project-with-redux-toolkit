import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Transaction from "./Transaction";

const Transactions = () => {
  const navigate = useNavigate();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );
  console.log(transactions);

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
      .slice(0, 5)
      .map((singleTransaction) => (
        <Transaction
          key={singleTransaction.id}
          singleTransaction={singleTransaction}
        ></Transaction>
      ));
  }

  const handleAllViewPage = () => {
    navigate("/viewAll");
  };
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
        <button className="btn" onClick={handleAllViewPage}>
          View all transaction
        </button>
      </div>
    </>
  );
};

export default Transactions;
