/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type Props = {
	cart: any;
};

const Navbar = (props: Props) => {
	return (
		<div className="w-full h-12 bg-[#EEE3CB] flex justify-between items-center flex-row p-8 shadow-sm">
			<Link href="/">
				<div className="flex justify-center items-center text-[#967E76] h-full font-bold text-2xl">
					<img src="https://o.remove.bg/downloads/4437fec3-6ed5-4b3a-8c0b-240302c86435/istockphoto-1009524216-612x612-removebg-preview.png" alt="LOGO" className="w-12" />
					<p>RAM IT</p>
				</div>
			</Link>
			<div className="flex gap-7 flex-row-reverse">
				<Link href="/account">
					<div className="flex justify-center items-center text-[#967E76] h-full font-bold text-xl">
						<p>Account</p>
					</div>
				</Link>
				<Link href="/cart">
					<div className="flex justify-center items-center text-[#967E76] h-full font-bold text-xl">
						<p>Cart ({props.cart.length})</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
