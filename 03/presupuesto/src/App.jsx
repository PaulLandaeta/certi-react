import Presupuesto from "./components/Presupuesto";
import "./App.css";
import Resumen from "./components/Resumen";
import { useEffect, useState } from "react";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [click, setClick] = useState(false);
  useEffect(() => {
    console.log("Estoy imprmiendo desde APP", presupuesto);
  }, [presupuesto]);
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
        <Resumen presupuesto={presupuesto}/>
      )}
    </div>
  );
}

export default App;
