import React, { useState } from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
	
    const [color, setColor] = useState("red");
    

    const HandleClick = (color) => {
        setColor(color);
    };

    return (
        <div className="traffic-light">
            <div 
                className={`red ${color === "red" ? "selected" : ""}`} 
                onClick={() => HandleClick("red")}
            ></div>
            <div 
                className={`yellow ${color === "yellow" ? "selected" : ""}`} 
                onClick={() => HandleClick("yellow")}
            ></div>
            <div 
                className={`green ${color === "green" ? "selected" : ""}`} 
                onClick={() => HandleClick("green")}
            ></div>
			
        </div>
    );
};

export default TrafficLight;
