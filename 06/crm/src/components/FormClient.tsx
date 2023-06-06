import { addClient, getClientById } from "../services/clientsService";
import { useForm } from "react-hook-form";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

const FormClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { clientId } = useParams();
  const location = useLocation();
  const getClient = async (id) => {
    const { data } = await getClientById(id);
    console.log(data);
  };
  useEffect(() => {
    if (clientId) {
      const f = async () => {
        await getClient(clientId);
      };
      f();
    }
  }, []);

  const onSubmitPaul = (data) => {
    console.log(":P", data);
    addClient({
      id: data.name,
      name: "adro",
      lastName: "Rodriguez",
      company: "Mojix",
    });
  };
  return (
    <>
      <div className="m-10 ">
        <form onSubmit={handleSubmit(onSubmitPaul)}>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="nombre">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              {...register("name")}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="empresa">
              Apellido:
            </label>
            <input
              id="lastName"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              {...register("lastName")}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800" htmlFor="telefono">
              Teléfono:
            </label>
            <input
              id="company"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              {...register("company")}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormClient;
