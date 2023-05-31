import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: String, required: true },
  id: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default orderSchema;
