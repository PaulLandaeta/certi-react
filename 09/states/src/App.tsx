import FormClient from "./components/FormClient";
import StoreProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <StoreProvider>
        <FormClient />
      </StoreProvider>
    </>
  );
}

export default App;
