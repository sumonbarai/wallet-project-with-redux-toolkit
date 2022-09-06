import React from "react";
import Balance from "../components/Balance";
import Form from "../components/Form";
import Transactions from "../components/Transactions/Transactions";

const Home = () => {
  return (
    <div>
      <Balance></Balance>
      <Form></Form>
      <Transactions></Transactions>
    </div>
  );
};

export default Home;
