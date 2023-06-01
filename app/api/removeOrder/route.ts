import mongoose from "mongoose";
import { NextResponse } from "next/server";
import orderSchema from "../schema/orderSchema";

if (mongoose.modelNames().includes("Order")) {
	var order = mongoose.model("Order");
} else {
	order = mongoose.model("Order", orderSchema);
}

mongoose.connect(process.env.MONGODB);

export async function POST(request: Request) {
	const body = await request.json();
	const data = await order.deleteOne({ id: body.id });

	return NextResponse.json(data);
}
