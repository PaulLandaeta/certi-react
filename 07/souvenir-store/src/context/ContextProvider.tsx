import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialValues } from "./storeReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useReducer(storeReducer, initialValues)}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  console.log("contexto", useContext(StoreContext));
  return useContext(StoreContext)[0];
};
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default StoreProvider;
