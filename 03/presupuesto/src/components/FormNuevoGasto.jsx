import { useState } from "react";
const FormNuevoGasto = ({ gastos, setGastos, setNewGasto }) => {
  const [gasto, setGasto] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewGasto(false);
    setGastos(Number(gastos) + Number(gasto));
  };

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto">
      <h2 className="text-stone-500 text-3xl text-center font-bold">
        Agregar Gasto
      </h2>
      <form className="py-5 my-5 m-5" onSubmit={handleSubmit}>
        <input
          id="gasto"
          type="text"
          value={gasto}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === "") {
              setGasto(e.target.value);
            }
          }}
          placeholder="Ingrese Gasto"
          className="border-2 w-full p-1"
        />

        <input
          type="submit"
          value="Agregar"
          className="bg-zinc-700 w-full p-5 
                  rounded-md my-5 text-white font-bold 
                  cursor-pointer hover:bg-zinc-300"
        />
      </form>
    </div>
  );
};

export default FormNuevoGasto;
