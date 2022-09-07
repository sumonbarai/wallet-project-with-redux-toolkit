import React from "react";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import {
  activeEdit,
  deleteTransactionThunk,
} from "../../feature/transaction/transactionSlice";
import toast from "react-hot-toast";
import { modalPopUp } from "../../feature/filter/filterSlice";

const Transaction = ({ singleTransaction }) => {
  const dispatch = useDispatch();
  const { name, type, amount, id } = singleTransaction || {};
  const handleDelete = (id) => {
    dispatch(deleteTransactionThunk(id));
    toast.success("Successfully deleted!");
  };

  const handleUpdate = () => {
    dispatch(modalPopUp());
    dispatch(activeEdit(singleTransaction));
  };

  return (
    <li className={`transaction ${type}`}>
      {/* li color change by class income or expense */}
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img
            className="icon"
            src={editIcon}
            alt="edit"
            onClick={handleUpdate}
          />
        </button>
        <button className="link">
          <img
            className="icon"
            src={deleteIcon}
            alt="delete"
            onClick={() => handleDelete(id)}
          />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
