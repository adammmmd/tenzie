import React from "react";

export default function Die(props) {

    const [diceValue, setdiceValue] = React.useState([props.value])

    const dice = diceValue.map(die => (
        <img 
            className="dice"
            src={`./Dice-${die}.svg`} 
        />
    ))


    return (
        <div 
            className={`number ${props.isHeld && "held"}`}
            onClick={props.hold}
        >
            {dice}
        </div>
    )
}