"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

export default function Cart() {
  const cart: { [key: string]: any } = useSelector((state: { [key: string]: any }) => state.cart);
  console.log(cart);

  const getTotalPrice = () => {
    return cart.reduce((accumulator: number, item: { quantity: number; price: number }) => accumulator + item.quantity * item.price, 0);
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
      <Navbar />
      <h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-[-1deg] shadow">Cart</h1>
      <div className="h-full w-full pl-12 overflow-scroll flex flex-row">
        <div className="w-7/12 grid grid-cols-3">
          {Object.values(cart).map((item, i) => {
            return <CartItems key={i} item={item} />;
          })}
        </div>
        <div className="w-4/12 flex h-5/6 bg-[#fff3d8] fixed p-12 bottom-14 right-24 text-[#967E76] shadow-lg">
          <p className="text-xl">TOTAL PRICE: {getTotalPrice()} kr</p>
        </div>
        <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[2.7rem] top-[8rem] rotate-[38deg] shadow"></div>
        <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[42rem] top-[8rem] rotate-[-48deg] shadow"></div>
      </div>
    </main>
  );
}
