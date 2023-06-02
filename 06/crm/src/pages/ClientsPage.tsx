import { useEffect, useState } from "react";
import ClientInterface from "../models/ClientInterface";
import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";

const ClientsPage = () => {
  const [clients, setClients] = useState<ClientInterface[]>([]);
  const { data } = useLoaderData();
  useEffect(() => {
    setClients(data);
  }, []);

  return (
    <>
      <Table
        clients={clients}
        onEdit={() => {
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
