import React from "react";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";

const Transaction = () => {
  return (
    <li class="transaction income">
      <p>Earned this month</p>
      <div class="right">
        <p>৳ 100</p>
        <button class="link">
          <img class="icon" src={editIcon} alt="edit" />
        </button>
        <button class="link">
          <img class="icon" src={deleteIcon} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
