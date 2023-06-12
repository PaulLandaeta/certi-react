import { useState, useCallback, useRef } from "react";
import "./App.css";
import CardTwo from "./components/CardTwo";
import Header from "./components/Header";
import { useIncrement } from "./hooks/useIncrement";

function App() {
  const [click, setClick] = useState(false);
  const { incrementar: incrementarOne } = useIncrement(0);
  const { incrementar: incrementarTwo } = useIncrement(0);
  const { incrementar: incrementarThree } = useIncrement(0);
  const [inputValue, setInputValue] = useState('');
  const myInput = useRef(null);
  const header = useRef(null);
  console.log('my Input', myInput);
  const handleClick = () => {
    
    const objectInput = myInput.current;
    objectInput.value = 'Hola Pepito';
  }
  return (
    <>
      <Header ref={header} text="Bienvenido a mi clase" />
      <input ref={myInput} type="text" value={inputValue}></input>
      {/* <CardTwo
        image="https://rickandmortyapi.com/api/character/avatar/22.jpeg"
        description="Esta es la descripción de la tarjeta 1."
        setCounter={incrementarOne}
      />
      <CardTwo
        image="https://rickandmortyapi.com/api/character/avatar/21.jpeg"
        description="Esta es la descripción de la tarjeta 2."
        setCounter={incrementarTwo}
      />
      <CardTwo
        image="https://rickandmortyapi.com/api/character/avatar/23.jpeg"
        description="Esta es la descripción de la tarjeta 3."
        setCounter={incrementarThree}
      /> */}
      <button
        onClick={() => {
          handleClick();
          setClick(!click);
        }}
      >
        Click
      </button>
    </>
  );
}

export default App;
