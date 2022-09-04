import React from "react";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";

const Transaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
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
