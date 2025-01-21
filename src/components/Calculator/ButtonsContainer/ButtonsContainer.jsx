import "./ButtonsContainer.css";
import Button from "./Button/Button";

export default function ButtonsContainer({
  operatorClick,
  handleClick,
  handleEqual,
  clear,
  backspace,
}) {
  return (
    <div className="btnsContainer">
      <Button
        style={{ gridColumn: "span 2" }}
        handleClick={clear}
        value={"AC"}
        name={"AC"}
      />

      <Button
        style={{ gridColumn: "span 2" }}
        value={"DEL"}
        name={"DEL"}
        handleClick={backspace}
      />

      <Button value={1} name={1} handleClick={handleClick} />

      <Button value={2} name={2} handleClick={handleClick} />

      <Button value={3} name={3} handleClick={handleClick} />

      <Button value={"+"} name={"+"} handleClick={() => operatorClick("+")} />

      <Button value={4} name={4} handleClick={handleClick} />

      <Button value={5} name={5} handleClick={handleClick} />

      <Button value={6} name={6} handleClick={handleClick} />

      <Button value={"-"} name={"-"} handleClick={() => operatorClick("-")} />

      <Button value={7} name={7} handleClick={handleClick} />

      <Button value={8} name={8} handleClick={handleClick} />

      <Button value={9} name={9} handleClick={handleClick} />

      <Button value={"*"} name={"*"} handleClick={() => operatorClick("*")} />

      <Button value={0} name={0} handleClick={handleClick} />

      <Button
        style={{ gridColumn: "span 2" }}
        value={"="}
        name={"="}
        handleClick={handleEqual}
      />

      <Button value={"/"} name={"/"} handleClick={() => operatorClick("/")} />
    </div>
  );
}
