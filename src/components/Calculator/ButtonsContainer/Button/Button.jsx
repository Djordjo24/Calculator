import "./Button.css";

export default function Button({ value, handleClick, style }) {
  return (
    <button className="btn" style={style} onClick={(e) => handleClick(e)}>
      {value}
    </button>
  );
}
