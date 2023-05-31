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
import { useState } from "react";

export default function Cart() {
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const { data: session } = useSession();
  const cart: { [key: string]: any } = useSelector((state: { [key: string]: any }) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce((accumulator: number, item: { quantity: number; price: number }) => accumulator + item.quantity * item.price, 0);
  };

  const buy = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
    } else if (!country || !address || !city || !zipcode) {
      toast.error("Please fill in all fields");
    } else if (session) {
      let id = Date.now();
      cart.forEach((element: any) => {
        axios.post("/api/buy", {
          user: session?.user.email,
          id: id,
          item: element.name,
          quantity: element.quantity,
          price: element.price * element.quantity,
          address: address,
          zipcode: zipcode,
        });
        dispatch(removeFromCart(element.name));
      });
      toast.success("Bought");
      setAddress("");
      setCountry("");
      setCity("");
      setZipcode("");
    } else {
      toast.error("Not logged in");
    }
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
      <Navbar />
      <h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-[-1deg] shadow">CART</h1>
      <div className="h-full w-full pl-12 overflow-scroll flex flex-row">
        <div className="w-7/12 grid grid-cols-3">
          {Object.values(cart).map((item, i) => {
            return <CartItems key={i} item={item} />;
          })}
        </div>
        <div className="w-4/12 flex h-5/6 bg-[#EEE3CB] fixed p-12 bottom-14 right-24 text-[#967E76] shadow-lg">
          <div className="flex flex-col justify-start items-center w-full gap-2">
            <p className="text-5xl mb-12 -rotate-2">RECEIPT</p>
            <p className="text-xl mb-8">TOTAL PRICE: {getTotalPrice()} kr</p>
            <input className="p-2 text-left w-96 bg-[#fff3d8] text-[#967E76] shadow" type="text" value={country} placeholder="Country..." onChange={(e) => setCountry(e.target.value)} />
            <input className="p-2 text-left w-96 bg-[#fff3d8] text-[#967E76] shadow" type="text" value={address} placeholder="Address..." onChange={(e) => setAddress(e.target.value)} />
            <div className="w-96 flex flex-row justify-between items-center">
              <input className="p-2 text-left w-52 bg-[#fff3d8] text-[#967E76] shadow" type="text" value={city} placeholder="City..." onChange={(e) => setCity(e.target.value)} />
              <input className="p-2 text-left w-[10rem] bg-[#fff3d8] text-[#967E76] shadow" type="text" value={zipcode} placeholder="Zip..." onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <button className="w-5/6 h-12 bg-[#D7C0AE] mt-8 m-4 text-xl shadow-md hover:bg-[#d4bdab] transition-all" onClick={() => buy()}>
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
