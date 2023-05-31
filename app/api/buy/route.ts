import mongoose from "mongoose";
import { NextResponse } from "next/server";
import orderSchema from "../schema/orderSchema";

if (mongoose.modelNames().includes("Order")) {
  var dbOrder = mongoose.model("Order");
} else {
  dbOrder = mongoose.model("Order", orderSchema);
}

mongoose.connect(process.env.MONGODB);

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const { user, id, item, quantity, price, address, zipcode } = body;

  const newOrder = new dbOrder({ user: user, id: id, item: item, quantity: quantity, price: price, address: address, zipcode: zipcode });
  const order = await newOrder.save();

  return NextResponse.json(order);
}
