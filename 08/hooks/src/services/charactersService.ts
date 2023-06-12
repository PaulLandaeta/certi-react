import { API } from "./instance";

export const getCharacter = async () => {
  console.log('getCharacter');
  return await API.get("/character");
};
