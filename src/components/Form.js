import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionThunk } from "../feature/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addTransactionThunk({ name, type, amount: Number(amount) }));
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label htmlFor="transaction_name">Name</label>
          <input
            type="text"
            name="transaction_name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="radio"
              id="income"
              onChange={(e) => setType(e.target.value)}
              required
              checked={type === "income"}
            />
            <label htmlFor="income">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="radio"
              placeholder="Expense"
              id="expense"
              onChange={(e) => setType(e.target.value)}
              checked={type === "expense"}
              required
            />
            <label htmlFor="expense">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transaction_amount">Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            id="transaction_amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button className="btn">Add Transaction</button>
      </form>

      <button className="btn cancel_edit">Cancel Edit</button>
      {isError && <p className="error">some error problem</p>}
    </div>
  );
};

export default Form;
