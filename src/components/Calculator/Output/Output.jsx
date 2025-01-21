import "./Output.css";

export default function Output({ display, result }) {
  return (
    <div className="output">{result || result === 0 ? result : display}</div>
  );
}
