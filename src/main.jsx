import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Wallet from "./components/Wallet/Wallet.jsx";
import Account from "./components/Account/Account";
import Activity from "./components/Activity/Activity";
import Promotion from "./components/Promotion/Promotion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "promotion",
        element: <Promotion />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
