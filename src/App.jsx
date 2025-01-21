import "./App.css";
import { Background } from "./components/Background/Background";
import { Wrapper } from "./components/Background/Wrapper/Wrapper";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <>
      <Background>
        <Wrapper>
          <Calculator />
        </Wrapper>
      </Background>
    </>
  );
}

export default App;
