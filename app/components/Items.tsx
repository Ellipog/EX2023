/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
	items: any;
};

const Navbar = (props: Props) => {
	const random = Math.floor(Math.random() * 4) - 2;

	return (
		<div className="p-8">
			<div className="fixed z-10 w-full">
				<img src="https://pngimg.com/uploads/pin/pin_PNG76.png" alt="pin" className="h-10 relative left-[6%]" />
			</div>
			<div className="flex flex-col justify-center items-center p-8 bg-[#EEE3CB] shadow-xl" style={{ rotate: random + "deg" }}>
				<img src={props.items.image} alt={props.items.name} className="mb-4 bg-[#D7C0AE] object-contain p-4 w-full h-56" />
				<div className="bg-[#fff3d8] flex justify-center flex-col items-center p-2 w-9/12 shadow">
					<h1 className="text-[#967E76] font-medium">{props.items.name}</h1>
					<h1 className="text-[#967E76] font-medium">{props.items.price} kr</h1>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
