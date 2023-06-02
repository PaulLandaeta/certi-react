import axios from 'axios';
const BASE_URL = import.meta.env.API_URL; // TODO: Environment
debugger;
export const crmAPI = axios.create({
  baseURL: BASE_URL,
});
