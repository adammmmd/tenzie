import React from "react";

export default function Die(props) {


    return (
        <div 
            className={`number ${props.isHeld && "held"}`}
            onClick={props.hold}
        >
        <img 
            className="dice"
            src={`./Dice-${props.value}.svg`} 
        />
        </div>
    )
}