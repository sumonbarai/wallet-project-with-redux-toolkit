import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./app/store";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewAll" element={<ViewAll />} />
          </Routes>
        </Layout>
      </Provider>
      <Toaster />
    </div>
  );
}

export default App;
