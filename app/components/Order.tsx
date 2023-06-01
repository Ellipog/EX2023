/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
	orders: any;
};

const Navbar = (props: Props) => {
	const random = Math.floor(Math.random() * 6) - 3;
	const order = props.orders;

	const quantity = order.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
	const totalCost = order.reduce((acc: number, item: { quantity: number; price: number }) => acc + item.quantity * item.price, 0);

	return (
		<div className="p-8 w-10/12">
			<div className="relative z-10">
				<img src="https://pngimg.com/uploads/pin/pin_PNG76.png" alt="pin" className="h-10 absolute left-[40%]" />
			</div>
			<div className="flex flex-col justify-center items-center p-8 bg-[#EEE3CB] w-full shadow-xl transition-all h-[30rem]" style={{ rotate: random + "deg" }}>
				<div className="flex flex-row justify-between items-center w-full h-full">
					<div className="bg-[#fff3d8] flex justify-between flex-col items-center w-full h-full shadow p-5">
						<div className="flex w-full gap-1 flex-col justify-center items-center">
							<h1 className="text-[#967E76] font-medium">{order[0].id}</h1>
							{Object.values(order).map((orders: any, i) => {
								// eslint-disable-next-line react/jsx-key
								return (
									<div key={i} className="flex w-full justify-between">
										<h1 className="text-[#967E76] font-medium">{order[i].item}</h1>
										<h1 className="text-[#967E76] font-medium">{order[i].quantity}</h1>
									</div>
								);
							})}
						</div>
						<div className="flex flex-col justify-between w-full">
							<h1 className="text-[#967E76] font-medium">{order[0].user}</h1>
							<h1 className="text-[#967E76] font-medium">
								{order[0].address} | {order[0].zipcode}
							</h1>
							<div className="flex flex-row justify-between">
								<h1 className="text-[#967E76] font-medium">QTY: {quantity}</h1>
								<h1 className="text-[#967E76] font-medium">{totalCost} kr</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
