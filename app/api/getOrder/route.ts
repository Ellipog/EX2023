import mongoose from "mongoose";
import { NextResponse } from "next/server";
import orderSchema from "../schema/orderSchema";

if (mongoose.modelNames().includes("Order")) {
	var order = mongoose.model("Order");
} else {
	order = mongoose.model("Order", orderSchema);
}

mongoose.connect(process.env.MONGODB);

export async function GET(request: Request) {
	const data = await order.find({});
	const Order = data.sort((a, b) => {
		return b.id - a.id;
	});

	return NextResponse.json(Order);
}
