"use client";

import Navbar from "./components/Navbar";
import Items from "./components/Items";
import { useState } from "react";

export default function Home() {
	const [items, setItems] = useState([
		{
			name: "Wireless Mouse",
			price: 599,
			image: "https://i.imgur.com/XRZHd9V.png",
			desc: "Are you tired of dragging your mouse around like a caveman? Do you want to experience the thrill of rolling a ball with your thumb? Then you need the ball wheel mouse, the ultimate device for thumb enthusiasts. It's ergonomic, it's stylish, and it's fun. Order yours today and get ready to roll!",
		},
		{
			name: "Computer Monitor",
			price: 1299,
			image: "https://i.imgur.com/vjvVwY3.png",
			desc: "Are you looking for a vintage piece of technology to spice up your home office? Look no further than this old computer monitor! It has a CRT screen that flickers like a candle, a bulky frame that takes up half your desk, and a resolution that makes everything look pixelated. What more could you ask for?",
		},
		{
			name: "Keyboard",
			price: 799,
			image: "https://i.imgur.com/YdK6tZj.png",
			desc: "Looking for a vintage typing experience? Look no further than this old keyboard! It has all the features you love: loud clicks, sticky keys, and a charming layer of dust. Hurry up and get it before it becomes a museum piece!",
		},
		{
			name: "MS License - 1 month",
			price: 10999,
			image: "https://i.imgur.com/tdSu85T.png",
			desc: "Looking for a blast from the past? Try Windows 95 for one month and experience the nostalgia of clunky graphics, slow loading times and frequent crashes. You'll be amazed at how far technology has come since then. Hurry up and get your Windows 95 license today, before it becomes obsolete again!",
		},
		{
			name: "Duramont Chair",
			price: 99,
			image: "https://i.imgur.com/FWIwxLA.png",
			desc: "Looking for a comfortable and stylish chair for your home or office? Look no further than the leather duramont chair! This chair features a sleek design, a padded seat and back, and an adjustable height and tilt mechanism. Whether you need to work, relax, or nap, the leather duramont chair has you covered!",
		},
		{
			name: "IPhone 2",
			price: 12999,
			image: "https://i.imgur.com/scs9tUA.png",
			desc: "Are you tired of touchscreens and apps? Do you long for the good old days of dialing numbers by hand? Then you need the iPhone 2 rotary phone! It's the perfect blend of retro and modern, with a sleek design and a satisfying click. Just plug it into your wall socket and enjoy the nostalgia. Order now and get a free pair of earbuds!",
		},
		{
			name: "Red Computer Desk",
			price: 16999,
			image: "https://i.imgur.com/3eiCseG.png",
			desc: "Are you looking for a very small red computer desk? Look no further than this one! It's so small, you can fit it in your pocket. It's so red, you'll never lose sight of it. It's so computer-friendly, it has a built-in USB port. Don't miss this amazing offer!",
		},
		{
			name: "Computer Camera",
			price: 299,
			image: "https://i.imgur.com/KdLhWoU.png",
			desc: "Looking for a vintage webcam? Look no further than this ancient relic from the early 2000s. It has a whopping 0.3 megapixels resolution, a built-in microphone that sounds like a tin can, and a USB cable that barely fits in your laptop. Hurry up and get it before it becomes a museum piece!",
		},
	]);

	return (
		<main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
			<Navbar />
			<h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-1 shadow">PRODUCTS</h1>
			<div className="h-full w-9/12 grid grid-cols-4">
				{Object.values(items).map((items, i) => {
					return <Items key={i} items={items} />;
				})}
			</div>
		</main>
	);
}
