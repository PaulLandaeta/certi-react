import { useEffect, useState } from "react";

const Resumen = ({presupuesto}) => {
  const [click, setClick] = useState(false);
 console.log(presupuesto);
  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/3 mx-auto">
      <h2 className="text-stone-500 text-3xl text-center font-bold">
      Resumen { presupuesto }
      </h2>
      
    </div>
  );
};

export default Resumen;
