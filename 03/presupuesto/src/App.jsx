import { useEffect, useState } from "react";
import Presupuesto from "./components/Presupuesto";
import Modal from "./components/Modal";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import ListadoGastos from './components/ListadoGastos';
import "./App.css";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [gastos, setGastos] = useState(0);
  const [click, setClick] = useState(false);
  const [newGasto, setNewGasto] = useState(false);
  const [gastosD, setGastosD] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  
  useEffect(() => {
    console.log("Se cambio Gastos D", gastosD);
  }, [gastosD]);

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }

  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {!click ? (
        <Presupuesto
          presupuesto={presupuesto}
          click={click}
          setClick={setClick}
          setPresupuesto={setPresupuesto}
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
          <ListadoGastos
            gastos={gastosD}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
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
      {newGasto && (
        <Modal
          gastos={gastos}
          setGastos={setGastos}
          setNewGasto={setNewGasto}
          gastosD={gastosD}
          setGastosD={setGastosD}
        />
      )}
    </div>
  );
}

export default App;
