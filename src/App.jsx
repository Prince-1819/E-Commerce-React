import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
// import ProductListStore from "./store/product-list-store";

function App() {
  return (
    <>
      <Header />
      <div className="my-outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
