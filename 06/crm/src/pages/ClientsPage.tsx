import { useEffect, useState } from "react";
import ClientInterface from "../models/ClientInterface";
import { useLoaderData } from "react-router-dom";

const ClientsPage = () => {
  const [clients, setClients] = useState<ClientInterface[]>([]);
  const data = useLoaderData() as ClientInterface[];
  useEffect(() => {
    setClients(data);
  }, []);

  return (
    <>
      {clients.map((client): ClientInterface => {
        return <h1 key={client.lastName}>{client.name}</h1>;
      })}
    </>
  );
};
export default ClientsPage;
