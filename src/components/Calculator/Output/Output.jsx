import "./Output.css";

export default function Output({ display, result }) {
  return (
    <div className="output">
      {typeof result === "number" || (result === "0" && !display)
        ? result
        : display}
    </div>
  );
}
