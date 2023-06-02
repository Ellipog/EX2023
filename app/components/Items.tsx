"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import { useState } from "react";

type Props = {
	items: any;
};

const Navbar = (props: Props) => {
	const random = Math.floor(Math.random() * 6) - 3;
	const [productPage, setProductPage] = useState(false);

	const dispatch = useDispatch();

	return (
		<div className="p-8">
			<div className="fixed z-10 w-full">
				<img src="https://pngimg.com/uploads/pin/pin_PNG76.png" alt="pin" className="h-10 relative left-[6%]" />
			</div>
			<div className="flex flex-col justify-center items-center p-8 bg-[#EEE3CB] shadow-xl transition-all" style={{ rotate: random + "deg" }}>
				<img src={props.items.image} alt={props.items.name} className="mb-4 bg-[#D7C0AE] object-contain p-4 w-full h-56" />
				<div className="flex flex-row justify-between items-center w-full">
					<div
						className="bg-[#fff3d8] flex justify-center flex-col items-center p-2 w-9/12 shadow"
						onClick={() => {
							setProductPage(true);
						}}
					>
						<h1 className="text-[#967E76] font-medium">{props.items.name}</h1>
						<h1 className="text-[#967E76] font-medium">{props.items.price} kr</h1>
					</div>
					<FontAwesomeIcon
						icon={faShoppingCart}
						className="w-10 h-10 text-[#967E76] hover: cursor-pointer"
						onClick={() => {
							toast.success("Added to cart!");
							dispatch(addToCart(props.items));
						}}
					/>
				</div>
			</div>
			{productPage && (
				<div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center z-20 text-[#967E76]" onClick={() => setProductPage(false)}>
					<div className="h-3/6 w-6/12 bg-[#e9dec7] shadow-xl flex justify-center items-center gap-14">
						<div className="w-2/5 h-96">
							<img src={props.items.image} alt={props.items.name} className="mb-4 bg-[#D7C0AE] object-contain p-4 w-full h-full" />
						</div>
						<div className="w-2/5 flex justify-center items-center flex-col h-96 gap-5">
							<div className="bg-[#fff3d8] flex justify-between flex-col items-center p-5 w-full h-full shadow gap-3">
								<p className="text-xl">{props.items.name}</p>
								<p className="text-sm">{props.items.desc}</p>
								<div className="flex w-full flex-col">
									<div className="flex w-full flex-row justify-between">
										<p>Without mva:</p>
										<p>{props.items.price} kr</p>
									</div>
									<div className="flex w-full flex-row justify-between">
										<p>With mva:</p>
										<p>{props.items.price + props.items.price * 0.25} kr</p>
									</div>
								</div>
							</div>
							<button
								className="p-2 text-center bg-[#fff3d8] text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] hover:rotate-[0.5deg] transition-all"
								onClick={() => {
									toast.success("Added to cart!");
									dispatch(addToCart(props.items));
								}}
							>
								ADD TO CART
							</button>
						</div>
					</div>
					<div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[28.4rem] top-[17rem] rotate-[38deg] shadow"></div>
					<div className="w-1/12 h-10 bg-[#D7C0AE] fixed left-[28.4rem] top-[17rem] rotate-[-38deg] shadow"></div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
