import { formatearCantidad } from "../helpers/numbers";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Resumen = ({ presupuesto }) => {
  const porcentaje = 100;
  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto">
      <h2 className="text-stone-500 text-3xl text-center font-bold my-2">
        Resumen {presupuesto}
      </h2>
      <div className="flex flex-row">
        <div className="basis-1/2 p-5">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
              trailColor: "#F5F5F5",
              textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
              textSize: '12px'
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
          />
        </div>
        <div className="basis-1/2 p-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="button"
          >
            Resetear App
          </button>

          <p className="font-semibold text-gray-500 mt-5">
            <span className="font-bold text-lime-700 text-lg">
              Presupuesto:
            </span>{" "}
            {formatearCantidad(22)}
          </p>

          <p className="font-semibold text-gray-500">
            <span className="font-bold text-lime-700 text-lg">
              Disponible:{" "}
            </span>{" "}
            {formatearCantidad(33)}
          </p>

          <p className="font-semibold text-gray-500">
            <span className="font-bold text-lime-700 text-lg">Gastado: </span>{" "}
            {formatearCantidad(22)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
