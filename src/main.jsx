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
import Avatar from "./components/Account/UserDetails/Avatar/Avatar";
import Deposite from "./components/Account/AllCards/Cards/Cards01/Deposite/Deposte";
import Withdraw from "./components/Account/AllCards/Cards/Cards01/Withdraw/Withdraw";
import GameHistory from "./components/Account/AllCards/Cards/Cards03/GameHistory/GameHistory";
import Feedback from "./components/Account/AllCards/Cards/Cards05/Feedback/Feedback";
import Settings from "./components/Account/AllCards/Cards/Cards05/Settings/Settings";
import Guide from "./components/Account/AllCards/Cards/Cards05/Guide/Guide";
import CustomerService from "./components/Account/AllCards/Cards/Cards05/CustomerService/CustomerService";
import Notification from "./components/Account/AllCards/Cards/Cards05/Notificaiton/Notification";
import About from "./components/Account/AllCards/Cards/Cards05/About/About";
import Transactions from "./components/Account/AllCards/Cards/Cards03/Transaction/Transactions";
import Game01 from "./components/Games/Game01/Game01";
import Payment from "./components/Account/AllCards/Cards/Cards01/Deposite/Payment/Payment";
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
      {
        path: "/avatar",
        element: <Avatar />,
      },
      {
        path: "/deposite",
        element: <Deposite />,
      },

      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/BetRecords",
        element: <GameHistory />,
      },
      {
        path: "account/SettingCenter",
        element: <Settings />,
      },
      {
        path: "account/Feedback",
        element: <Feedback />,
      },
      {
        path: "account/CustomerService",
        element: <CustomerService />,
      },
      {
        path: "account/Notification",
        element: <Notification />,
      },
      {
        path: "account/Guide",
        element: <Guide />,
      },
      {
        path: "account/About",
        element: <About />,
      },
      {
        path: "TransAction",
        element: <Transactions />,
      },
      {
        path: "gameFirst",
        element: <Game01 />,
      },
      {
        path: "pay",
        element: <Payment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
