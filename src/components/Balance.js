import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);
  let balance = 0;
  transactions.forEach((singleTransaction) => {
    const { type, amount } = singleTransaction;
    if (type === "income") {
      balance += amount;
    } else {
      balance -= amount;
    }
  });

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>
        {transactions.length > 0 ? <span> {balance}</span> : <span> 0</span>}
      </h3>
    </div>
  );
};

export default Balance;
