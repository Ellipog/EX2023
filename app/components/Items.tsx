/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
	items: any;
};

const Navbar = (props: Props) => {
	return (
		<div className=" p-16 over">
			<div className="flex flex-col justify-center items-center p-8 bg-[#EEE3CB]">
				<img src={props.items.image} alt="Datamus" className="mb-4" />
				<h1>{props.items.name}</h1>
				<h1>{props.items.price}</h1>
				<button className="p-2 text-center rounded bg-white w-72"></button>
			</div>
		</div>
	);
};

export default Navbar;
