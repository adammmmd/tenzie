import React from "react";

export default function Die(props) {
    return (
        <div 
            className={`number ${props.isHeld && "held"}`}
            onClick={props.hold}
        >
            <h1>{props.value}</h1>
        </div>
    )
}