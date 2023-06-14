import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

function App() {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
