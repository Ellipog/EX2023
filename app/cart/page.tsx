"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart.slice";

export default function Cart() {
  const { data: session } = useSession();
  const cart: { [key: string]: any } = useSelector((state: { [key: string]: any }) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce((accumulator: number, item: { quantity: number; price: number }) => accumulator + item.quantity * item.price, 0);
  };

  const buy = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
    } else if (session) {
      let id = Date.now();
      cart.forEach((element: any) => {
        axios.post("/api/buy", { user: session?.user.email, id: id, item: element.name, quantity: element.quantity, price: element.price * element.quantity });
        dispatch(removeFromCart(element.name));
      });
      toast.success("Bought");
    } else {
      toast.error("Not logged in");
    }
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
          <div className="flex flex-col justify-start items-center w-full">
            <p className="text-5xl mb-12 -rotate-2">RECEIPT</p>
            <p className="text-xl mb-8">TOTAL PRICE: {getTotalPrice()} kr</p>
            <button className="w-5/6 h-12 bg-[#D7C0AE] m-4 text-xl shadow-md hover:bg-[#d4bdab] transition-all" onClick={() => buy()}>
              VIPPS
            </button>
            <button className="w-5/6 h-12 bg-[#D7C0AE] m-4 text-xl shadow-md hover:bg-[#d4bdab] transition-all" onClick={() => buy()}>
              VISA
            </button>
            <button className="w-5/6 h-12 bg-[#D7C0AE] m-4 text-xl shadow-md hover:bg-[#d4bdab] transition-all" onClick={() => buy()}>
              PAYPAL
            </button>
          </div>
        </div>
        <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[2.7rem] top-[8rem] rotate-[38deg] shadow"></div>
        <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[42rem] top-[8rem] rotate-[-48deg] shadow"></div>
        <div className="w-3/12 fixed bg-[#967E76] break-words h-0.5 bottom-28 right-44" />
      </div>
    </main>
  );
}
