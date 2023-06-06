import { useEffect, useState } from "react";
import ClientInterface from "../models/ClientInterface";
import { useLoaderData, useNavigate } from "react-router-dom";
import Table from "../components/Table";

const ClientsPage = () => {
  const [clients, setClients] = useState<ClientInterface[]>([]);
  const navigate = useNavigate();
  const { data } = useLoaderData();
  useEffect(() => {
    setClients(data);
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      <Table
        clients={clients}
        onEdit={(client: ClientInterface) => {
          navigate(`/home/add-client/${client.id}`);
          console.log("on Edit");
        }}
        onDelete={() => {
          console.log("on onDelete");
        }}
      />
    </>
  );
};
export default ClientsPage;
