import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="w-full h-12 bg-[#EEE3CB] flex justify-between items-center flex-row p-8">
			<Link href="/">
				<div className="flex justify-center items-center text-[#967E76] h-full font-bold text-lg">
					<p>RAM IT</p>
				</div>
			</Link>
			<div>
				<Link href="/account">
					<div className="flex justify-center items-center text-[#967E76] h-full font-bold text-lg">
						<p>Account</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
