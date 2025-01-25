import "./App.css";
import { Background } from "./components/Background/Background";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <>
      <Background>
        <Calculator />
      </Background>
    </>
  );
}

export default App;
