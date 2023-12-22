import React, { useState } from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");
	const Click = (color)=>{
		setColor(color)
	}
	const Colors = ()=>{
		if (color === "red") setColor("red");
		if (color === "yellow") setColor("yellow");
		else if (color === "green") setColor("green");

	}
	return (
		<div className="traffic-light">
			<div className={`red ${ color === "red" ? "active" : ""}`}
			 ></div>
			<div className={`yellow ${ color === "yellow" ? "active" : ""}`}></div>
			<div className={`green ${ color === "green" ? "active" : ""}`}
			onClick={Click}></div>
		</div>
		

	);
};

export default TrafficLight;
