import Balance from "./components/Balance";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div>
      <Layout>
        <Balance></Balance>
        <Form></Form>
        <Transactions></Transactions>
      </Layout>
    </div>
  );
}

export default App;
