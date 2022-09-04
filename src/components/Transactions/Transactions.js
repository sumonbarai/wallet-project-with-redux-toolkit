import React from "react";
import { useSelector } from "react-redux";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
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

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
