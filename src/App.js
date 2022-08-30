import React from "react";
import "./styles/styles.css";
import Die from "./components/die";
import { nanoid } from "nanoid";
import ConfettiComponent from "./components/confetti";
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
      return { value: num, isHeld: false, id: nanoid() };
    });
    return randomObjectArray;
  }
  const [array, setRandomArray] = React.useState(randomObject());
  const [tenzies, setTenzies] = React.useState(false);
  React.useEffect(() => {
    let allHeld = array.every((dice) => dice.isHeld);
    let allSame = array.every((dice) => dice.value === array[0].value);
    if (allHeld && allSame) {
      setTenzies(true);
    }
  }, [array]);

  function hold(id) {
    let newArray = array.map((element) => {
      if (element.id === id) {
        return { ...element, isHeld: !element.isHeld };
      } else {
        return element;
      }
    });
    setRandomArray(newArray);
  }

  function clickHandle() {
    if (tenzies) {
      setRandomArray(randomObject());
      setTenzies(false);
    } else {
      let newRoll = randomObject();
      let newArray = [];
      let element;
      setRandomArray((prevArray) => {
        for (let i = 0; i < 10; i++) {
          element = prevArray[i];
          newArray.push(element.isHeld ? element : newRoll[i]);
        }
        return newArray;
      });
    }
  }
  const btnStyle = {
    background: tenzies ? "orangered" : "#5035ff",
  };
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
            <Die
              value={num.value}
              isHeld={num.isHeld}
              hold={hold}
              id={num.id}
              key={num.id}
            />
          ))}
        </div>
        <button className="roll-btn" style={btnStyle} onClick={clickHandle}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>

      {tenzies && <ConfettiComponent />}
    </main>
  );
}

export default App;
