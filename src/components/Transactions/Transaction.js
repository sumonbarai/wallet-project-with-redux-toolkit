import React from "react";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";

const Transaction = ({ singleTransaction }) => {
  const { name, type, amount } = singleTransaction || {};
  return (
    <li className={`transaction ${type}`}>
      {/* li color change by class income or expense */}
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={editIcon} alt="edit" />
        </button>
        <button className="link">
          <img className="icon" src={deleteIcon} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
