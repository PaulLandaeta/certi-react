import { crmAPI } from "./crmInstance";

export const getClients = async () => {
  return await crmAPI.get("/clients");
};
