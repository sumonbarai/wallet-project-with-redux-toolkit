import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../feature/filter/filterSlice";
import {
  addTransactionThunk,
  cancelEdit,
  editTransactionThunk,
} from "../feature/transaction/transactionSlice";

const Form = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { isError, editedData } = useSelector((state) => state.transaction);

  const resetFrom = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addTransactionThunk({ name, type, amount: Number(amount) }));
    toast.success("Successfully added!");
    resetFrom();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(modalClose());
    dispatch(cancelEdit());
    const { id } = editedData;
    const data = {
      name,
      type,
      amount: Number(amount),
    };
    dispatch(editTransactionThunk({ id, data }));
    setEditMode(false);
    toast.success("Successfully Updated!");
    resetFrom();
  };

  const cancelEditBtn = () => {
    dispatch(modalClose());
    dispatch(cancelEdit());
  };
  useEffect(() => {
    const { id, name, type, amount } = editedData;
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      resetFrom();
    }
  }, [editedData]);

  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={editMode ? handleUpdate : handleCreate}>
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

        <button className="btn">
          {editMode ? "Updated Transaction" : "Add Transaction"}
        </button>
      </form>
      {isError && <p className="error">some error can't be added </p>}

      {editMode && (
        <button className="btn cancel_edit" onClick={cancelEditBtn}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
