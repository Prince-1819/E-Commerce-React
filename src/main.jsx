import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartProduct } from "./components/CartProduct.jsx";
import ProductList from "./components/ProductList.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import { Provider } from 'react-redux';
import store from './store/store';
import ProductDetails from "./components/ProductDetails.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartProduct />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutForm />
  },
  {
    path: "/order-summary",
    element: <OrderSummary />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provide the store to the whole app */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
