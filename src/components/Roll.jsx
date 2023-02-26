import React from "react";

export default function Roll(props) {
    return(
        <button className="roll-btn" onClick={props.rollDice}>{props.tenzie ? "New Game" : "Roll"}</button>
    )
}