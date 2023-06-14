import { addClient, updateClient } from "../services/clientsService";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const FormClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const [client, setClient] = useState({});
  const { data } = useLoaderData();
  useEffect(() => {
    setValue("name", data?.name);
    setValue("id", data?.id);
    setValue("lastName", data?.lastName);
    setValue("company", data?.company);
  }, []);

  const onSubmit = (data) => {
    if (data.id) {
      updateClient(data);
    } else {
      addClient({
        id: 103,
        ...data,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
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
          <label className="text-gray-800" htmlFor="lastName">
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
          <label className="text-gray-800" htmlFor="company">
            Company:
          </label>
          <input
            id="company"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            {...register("company")}
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          value={`${data?.name ? "Editar" : "Guardar"}`}
        />
      </form>
    </>
  );
};

export default FormClient;
