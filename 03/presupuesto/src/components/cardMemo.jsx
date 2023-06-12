import { useEffect, memo } from "react";

function GastoMemo({ setGastoMemo }) {
  console.log("estoy en el gasto Memo");
  return (
    <>
      <div className="gasto sombra ">
        <div className="contenido-gasto">
          <div className="descripcion-gasto">
            <p className="categoria">{"categoria"}</p>
            <p className="nombre-gasto">{"nombre"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(GastoMemo);
