/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart: { [key: string]: any } = useSelector((state: { [key: string]: any }) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator: any, item: { quantity: any }) => accumulator + item.quantity, 0);
  };

  return (
    <div className="w-full h-12 bg-[#EEE3CB] flex justify-between items-center flex-row p-8 shadow-sm">
      <Link href="/">
        <div className="flex justify-center items-center text-[#967E76] h-full font-bold text-2xl gap-4">
          <img src="https://i.imgur.com/nPLXP7n.png" alt="LOGO" className="w-12" />
          <p>RAM IT</p>
        </div>
      </Link>
      <div className="flex gap-7 flex-row-reverse">
        <Link href="/account">
          <div className="flex justify-center items-center text-[#967E76] h-full font-bold text-xl">
            <p>Account</p>
          </div>
        </Link>
        <Link href="/cart">
          <div className="flex justify-center items-center text-[#967E76] h-full font-bold text-xl">
            <p>Cart ({getItemsCount()})</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
