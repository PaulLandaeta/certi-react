import { useEffect, useState } from "react";
import Presupuesto from "./components/Presupuesto";
import Modal from "./components/Modal";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import ListadoGastos from "./components/ListadoGastos";
import "./App.css";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto")
      ? localStorage.getItem("presupuesto")
      : ""
  );
  const [gastos, setGastos] = useState(0);
  const [click, setClick] = useState((localStorage.getItem('click'))?localStorage.getItem('click'): false);
  const [newGasto, setNewGasto] = useState(false);
  const [gastosD, setGastosD] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    console.log("se cambio", presupuesto);
    localStorage.setItem("presupuesto", presupuesto);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("click", click);
  }, [click]);

  useEffect(() => {
    console.log("Se cambio Gastos D", gastosD);
  }, [gastosD]);

  const eliminarGasto = (id) => {
    const gastosActualizados = gastosD.filter((gasto) => gasto.id !== id);
    setGastosD(gastosActualizados);
  };
  const editarGasto = (gasto) => {
    console.table(gasto);
    setGastoEditar(gasto);
    setNewGasto(true);
  };

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
            setPresupuesto={setPresupuesto}
          />
          <ListadoGastos
            gastos={gastosD}
            setGastoEditar={editarGasto}
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
                setGastoEditar({});
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
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
