"use client";

import Navbar from "./components/Navbar";
import Items from "./components/Items";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([
    { name: "Wireless Mouse", price: 599, image: "https://i.imgur.com/XRZHd9V.png" },
    { name: "Computer Monitor", price: 1299, image: "https://i.imgur.com/vjvVwY3.png" },
    { name: "Keyboard", price: 799, image: "https://i.imgur.com/YdK6tZj.png" },
    { name: "MS License - 1 month", price: 10999, image: "https://i.imgur.com/tdSu85T.png" },
    { name: "Duramont Chair", price: 99, image: "https://i.imgur.com/FWIwxLA.png" },
    { name: "IPhone 2", price: 12999, image: "https://i.imgur.com/scs9tUA.png" },
    { name: "Red Computer Desk", price: 16999, image: "https://i.imgur.com/3eiCseG.png" },
    { name: "Computer Camera", price: 299, image: "https://i.imgur.com/KdLhWoU.png" },
  ]);

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
      <Navbar />
      <h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-1 shadow">Products</h1>
      <div className="h-full w-9/12 grid grid-cols-4">
        {Object.values(items).map((items, i) => {
          return <Items key={i} items={items} />;
        })}
      </div>
    </main>
  );
}
