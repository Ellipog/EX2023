"use client";

import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Order from "../components/Order";

export default function Dashboard() {
	const [orders, setOrders] = useState([]);
	const [update, setUpdate] = useState(false);

	async function getOrders() {
		const { data } = await axios.get("/api/getOrder");
		setOrders(data);
	}

	useEffect(() => {
		getOrders();
	}, [update]);

	const groupedOrders = orders.reduce((acc, order) => {
		const key = order.id;
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(order);
		return acc;
	}, {});

	console.log(groupedOrders);

	return (
		<main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
			<Navbar />
			<h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-[-1deg] shadow">DASHBOARD</h1>
			<div className="h-full w-full pl-12 overflow-scroll grid grid-cols-4">
				{Object.values(groupedOrders).map((orders, i) => {
					return <Order key={i} orders={orders} />;
				})}
			</div>
		</main>
	);
}
