import { useState } from "react";
import Presupuesto from "./components/Presupuesto";
import FormNuevoGasto from "./components/FormNuevoGasto";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import "./App.css";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [gastos, setGastos] = useState(0);
  const [click, setClick] = useState(false);
  const [newGasto, setNewGasto] = useState(false);
  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {!click ? (
        <Presupuesto
          presupuesto={presupuesto}
          click={click}
          setClick={setClick}
          setPresupuesto={setPresupuesto}
        />
      ) : newGasto ? (
        <FormNuevoGasto
        gastos ={gastos}
          setGastos = {setGastos}
          setNewGasto = {setNewGasto}
        />
      ) : (
        <>
          <Resumen
            setClick={setClick}
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setGastos={setGastos}
            setPresupuesto={setPresupuesto}
          />
          <div className="fixed bottom-5 right-5">
            <img
              className="w-10 hover:cursor-pointer"
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={() => {
                setNewGasto(true);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
