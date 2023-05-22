import { useEffect, useState } from "react";

const Presupuesto = ({presupuesto, setPresupuesto, click, setClick}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  useEffect(() => {
    console.log("Soy un efecto sin Dependencias");
  });

  useEffect(() => {
    console.log("Solo quiero q te ejecutes la primera vez", presupuesto);
  }, []);

  useEffect(() => {
    console.log("Solo quiero q te ejecutes cuando cambia el click");
  }, [click]);

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/3 mx-auto">
      <h2 className="text-stone-500 text-3xl text-center font-bold">
        Presupuesto
      </h2>
      <form className="py-5 my-5 m-5" onSubmit={handleSubmit}>
        <input
          id="presupuesto"
          type="text"
          value={presupuesto}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === "") {
              setPresupuesto(e.target.value);
            }
          }}
          placeholder="Ingrese Presupuesto"
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

export default Presupuesto;
