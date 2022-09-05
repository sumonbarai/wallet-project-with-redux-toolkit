import Balance from "./components/Balance";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Transactions from "./components/Transactions/Transactions";
import { Provider } from "react-redux";
import store from "./app/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Balance></Balance>
          <Form></Form>
          <Transactions></Transactions>
        </Layout>
      </Provider>
      <Toaster />
    </div>
  );
}

export default App;
