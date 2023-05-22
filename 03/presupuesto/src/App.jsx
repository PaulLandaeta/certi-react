import { useState } from "react";
import Presupuesto from "./components/Presupuesto";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import "./App.css";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [click, setClick] = useState(false);
  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {click ? (
        <Presupuesto
          presupuesto={presupuesto}
          click={click}
          setClick={setClick}
          setPresupuesto={setPresupuesto}
        />
      ) : (
        <Resumen presupuesto={presupuesto} />
      )}
      <div className="fixed bottom-5 right-5">
        <img
        className="w-10 hover:cursor-pointer"
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={() => {
            console.log(2);
          }}
        />
      </div>
    </div>
  );
}

export default App;
