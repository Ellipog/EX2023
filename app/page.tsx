"use client";

import Navbar from "./components/Navbar";
import Items from "./components/Items";
import { useState } from "react";

export default function Home() {
	const [items, setItems] = useState([
		{ name: "Wireless Mouse", price: 599, image: "https://o.remove.bg/downloads/a21be6ab-daac-405f-895d-a0e2025db25a/Rollerball-Mouse-removebg-preview.png" },
		{ name: "Computer Monitor", price: 1299, image: "https://o.remove.bg/downloads/41af20c3-708a-4117-abcb-58e7ee6375fb/OIP-removebg-preview.png" },
		{ name: "Keyboard", price: 799, image: "https://o.remove.bg/downloads/b598994e-7d43-49e3-81c1-4170cafdf491/R-removebg-preview.png" },
		{ name: "MS License - 1 month", price: 10999, image: "https://o.remove.bg/downloads/cfd4d96e-3a1a-4683-8176-34ab6b6ba555/s-l300-removebg-preview.png" },
		{ name: "Duramont Chair", price: 99, image: "https://o.remove.bg/downloads/4b76cff3-8419-4ee1-af42-fdc1823f35be/vintage-lounge-chair-1970s-removebg-preview.png" },
		{ name: "IPhone 2", price: 12999, image: "https://o.remove.bg/downloads/9af0d4a6-ca3e-4962-90d2-580ecaac9889/R-removebg-preview.png" },
		{ name: "Red Computer Desk", price: 16999, image: "https://o.remove.bg/downloads/30d1a2dd-1189-41d5-99bb-30c840e82645/__86-removebg-preview.png" },
		{
			name: "Computer Camera",
			price: 299,
			image: "https://o.remove.bg/downloads/37653457-de73-4ab2-93a4-0ae754235252/ec1db635d6d2cebd8b41b75144d49fa3--vintage-typewriters-vintage-cameras-removebg-preview.png",
		},
	]);
	const [cart, setCart] = useState([]);

	return (
		<main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
			<Navbar cart={cart} />
			<h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-1 shadow">Products</h1>
			<div className="h-full w-9/12 grid grid-cols-4">
				{Object.values(items).map((items, i) => {
					return <Items key={i} items={items} />;
				})}
			</div>
		</main>
	);
}
