"use client";

import Navbar from "./components/Navbar";
import Items from "./components/Items";
import { useState } from "react";

export default function Home() {
	const [items, setItems] = useState([
		{ name: "Trådløs Mus", price: 599, image: "https://o.remove.bg/downloads/a21be6ab-daac-405f-895d-a0e2025db25a/Rollerball-Mouse-removebg-preview.png" },
		{ name: "Trådløs Mus", price: 599, image: "https://o.remove.bg/downloads/a21be6ab-daac-405f-895d-a0e2025db25a/Rollerball-Mouse-removebg-preview.png" },
		{ name: "Trådløs Mus", price: 599, image: "https://o.remove.bg/downloads/a21be6ab-daac-405f-895d-a0e2025db25a/Rollerball-Mouse-removebg-preview.png" },
		{ name: "Trådløs Mus", price: 599, image: "https://o.remove.bg/downloads/a21be6ab-daac-405f-895d-a0e2025db25a/Rollerball-Mouse-removebg-preview.png" },
	]);

	return (
		<main className="flex w-screen h-screen flex-col items-center justify-center bg-[#a1adb8]">
			<Navbar />
			<div className="h-full w-5/6 grid grid-cols-4">
				{Object.values(items).map((items, i) => {
					return <Items key={i} items={items} />;
				})}
			</div>
		</main>
	);
}
