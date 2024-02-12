import { Spin } from "antd";
import React from "react";

const Loading = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<Spin />
		</div>
	);
};

export default Loading;
