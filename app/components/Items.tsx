/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
	items: any;
};

const Navbar = (props: Props) => {
	return (
		<div className="p-8 over">
			<div className="flex flex-col justify-center items-center p-8 bg-[#EEE3CB] rounded">
				<img src={props.items.image} alt={props.items.name} className="mb-4 bg-[#D7C0AE] rounded object-contain p-4 w-full h-60" />
				<h1 className="text-[#967E76] font-medium">{props.items.name}</h1>
				<h1 className="text-[#967E76] font-medium">{props.items.price} kr</h1>
			</div>
		</div>
	);
};

export default Navbar;
