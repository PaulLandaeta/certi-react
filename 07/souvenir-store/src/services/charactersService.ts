import { API } from "./instance";

export const getCharacter = async () => {
  return await API.get("/character");
};
