import clients from "../data/clients";
import ClientInterface from "../models/ClientInterface";
const ClientsPage = () => {
  console.log(clients);
  return (
    <>
      {clients.map((client): ClientInterface => {
        return <h1 key={client.lastName}>{client.name}</h1>;
      })}
    </>
  );
};
export default ClientsPage;
