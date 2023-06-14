import FormClient from "../components/FormClient";
import { useParams, useNavigate } from "react-router-dom";
const AddClientPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">
        {`${clientId ? "Editar" : "Agregar"}`} Cliente
      </h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
      </p>
      {clientId && (
        <div className="flex justify-end">
          <button
            className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>
      )}

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 pt-10 mt-20">
        <FormClient />
      </div>
    </>
  );
};
export default AddClientPage;
