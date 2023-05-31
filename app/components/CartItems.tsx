/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cart.slice";

type Props = {
  item: any;
};

const Navbar = (props: Props) => {
  const random = Math.floor(Math.random() * 6) - 3;
  const dispatch = useDispatch();
  const cart = props.item;

  return (
    <div className="p-8">
      <div className="relative z-10 w-full">
        <img
          src="https://pngimg.com/uploads/pin/pin_PNG76.png"
          alt="pin"
          className="h-10 absolute left-[40%]"
          onClick={() => {
            toast.success(`Added 1 ${cart.name} to cart!`);
            dispatch(incrementQuantity(cart.name));
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-8 bg-[#EEE3CB] shadow-xl transition-all" style={{ rotate: random + "deg" }}>
        <img src={cart.image} alt={cart.name} className="mb-4 bg-[#D7C0AE] object-contain p-4 w-full h-56" />
        <div className="flex flex-row justify-between items-center w-full">
          <div className="bg-[#fff3d8] flex justify-center flex-col items-center p-2 w-9/12 shadow">
            <h1 className="text-[#967E76] font-medium">{cart.name}</h1>
            <div className="flex flex-row justify-between w-full pl-1">
              <h1 className="text-[#967E76] font-medium">QTY: {cart.quantity}</h1>
              <h1 className="text-[#967E76] font-medium">{cart.price * cart.quantity} kr</h1>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            className="w-12 h-12 text-[#967E76] hover: cursor-pointer"
            onClick={() => {
              toast.success(`Removed 1 ${cart.name} from cart!`);
              dispatch(decrementQuantity(cart.name));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
