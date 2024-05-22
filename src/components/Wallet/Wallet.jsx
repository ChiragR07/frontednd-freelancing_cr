import React from "react";
import Header from "./Header/Header";
import WalletDetails from "./WalletDetails/WalletDetails";
import Cards01 from "./WalletDetails/Cards/Cards01";
export default function Wallet() {
  return (
    <div className="h-screen bg-[rgb(247,248,255)]">
      <Header />
      <WalletDetails />
      <Cards01 />
    </div>
  );
}
