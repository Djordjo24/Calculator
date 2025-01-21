import "./Calculator.css";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer";
import Output from "./Output/Output";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

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
    if (operators.includes(lastCharacter)) return;

    setDisplay("");

    setResult(calculate());
  }

  function calculate() {
    let resultValue = parseInt(characters[0]);

    for (let i = 1; i < characters.length; i += 2) {
      const operator = characters[i];
      const nextNumber = parseInt(characters[i + 1]);

      switch (operator) {
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        case "*":
          resultValue *= nextNumber;
          break;
        case "/":
          resultValue /= nextNumber;
          break;
        default:
          resultValue = "Error";
      }
    }
    return resultValue;
  }

  function clear() {
    setDisplay("");
    setResult("");
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
