import "./Calculator.css";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer";
import Output from "./Output/Output";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("0");

  const characters = display.trim().split(" ");
  const lastCharacter = characters[characters.length - 1];
  const operators = ["+", "-", "*", "/"];

  function handleClick(e) {
    const targetValue = e.target.innerText;
    setDisplay(display + targetValue);
  }

  function operatorClick(operator) {
    if (display === "" || operators.includes(lastCharacter)) return;

    setDisplay((prevDisplay) => {
      return prevDisplay + " " + operator + " ";
    });
  }

  function handleEqual() {
    if (operators.includes(lastCharacter)) {
      setDisplay("");
      setResult(calculate(display.trim().slice(0, -1).trim().split(" ")));
    } else {
      setDisplay("");
      setResult(calculate(display.trim().split(" ")));
    }
  }

  function calculate(characters) {
    const copyCharacters = characters.slice();

    for (let i = 0; i < copyCharacters.length; i++) {
      if (copyCharacters[i] === "*") {
        const operation = copyCharacters[i - 1] * copyCharacters[i + 1];
        copyCharacters.splice(i - 1, 3, operation);
        i--;
      } else if (copyCharacters[i] === "/") {
        const operation = copyCharacters[i - 1] / copyCharacters[i + 1];
        copyCharacters.splice(i - 1, 3, operation);
        i--;
      }
    }

    let resultValue = parseInt(copyCharacters[0]);

    for (let i = 1; i < copyCharacters.length; i += 2) {
      const operator = copyCharacters[i];
      const nextNumber = parseInt(copyCharacters[i + 1]);

      switch (operator) {
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        default:
          resultValue = "Error";
      }
    }
    return resultValue;
  }

  function clear() {
    setDisplay("");
    setResult("0");
  }

  function backspace() {
    setDisplay(display.trim().slice(0, -1));
  }

  return (
    <div className="calculator">
      <Output display={display} result={result} />
      <ButtonsContainer
        operatorClick={operatorClick}
        handleClick={handleClick}
        handleEqual={handleEqual}
        clear={clear}
        backspace={backspace}
      />
    </div>
  );
}
