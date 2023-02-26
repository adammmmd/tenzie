import React from "react"
import Die from "./components/Die"
import Roll from "./components/Roll"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const diceValue = dice[0].value
    const allSameValue = dice.every(die => diceValue === die.value)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }

  }, [dice])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 7),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => (
        prevDice.map(die => {
          return die.isHeld ? 
            die :
            {...die, value: Math.floor(Math.random() * 7)}
        })
      ))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(prevDice => (
      prevDice.map(die => {
        return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
      })
    ))
  }

  const dieElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      hold={() => holdDice(die.id)}
    />
  ))

  return (
      <main>
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die 
          to freeze it at its current value between rolls
        </p>
        <div className="number-container">
          {dieElements}
        </div>
          <Roll rollDice={rollDice} tenzie={tenzies}/>
      </main>
  )
}

export default App
