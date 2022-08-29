import React from "react";
import "./styles/styles.css";
import Die from "./components/die";
function randomArray() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    randomArray.push(num);
  }
  return randomArray;
}
function App() {
  function randomObject() {
    let random = randomArray();
    let randomObjectArray = random.map((num) => {
      return { value: num, isHeld: true };
    });
    return randomObjectArray;
  }

  const [array, setRandomArray] = React.useState(randomObject());
  function clickHandle() {
    setRandomArray(randomObject());
  }
  return (
    <main>
      <div className="content">
        <div className="text">
          <h2 className="title">Tenzies</h2>
          <p className="para">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dices">
          {array.map((num) => (
            <Die value={num.value} isHeld={num.isHeld} />
          ))}
        </div>
        <button className="roll-btn" onClick={clickHandle}>
          ROLL
        </button>
      </div>
    </main>
  );
}

export default App;
