import { addClient } from "../services/clientsService";
import { useForm } from "react-hook-form";

const FormClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
          <label className="text-gray-800" htmlFor="name">
            Nombre :
          </label>
          <input
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            {...register("name")}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
    </>
  );
};

export default FormClient;
