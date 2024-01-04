import React, { useState } from "react";


const TrafficLight = () => {
	
    const [color, setColor] = useState("red");
    const [verPurple, setVerPurple] = useState(false);

    const HandleClick = (color) => {
        setColor(color);
        setVerPurple(false);
    };

    const ChangeColor = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else if (color === "green") {
            setColor(verPurple ? "purple" : "red");
        } else if (color === "purple") {
            setColor("red"); 
        }
    };

    const AlternarPurple = () => {
        setVerPurple(!verPurple); 
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
            {verPurple && (
                <div 
                    className={`purple ${color === "purple" ? "selected" : ""}`} 
                    onClick={() => HandleClick("purple")}
                ></div>
            )}
            <button id= "purpleBoton" onClick={AlternarPurple}>Púrpura</button> <br/>
			 <button id= "colorBoton" onClick={ChangeColor}>Color</button>
        </div>
        
    );
};

export default TrafficLight
