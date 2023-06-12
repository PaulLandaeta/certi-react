import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import LoginPage from "./pages/LoginPage";
import { getCharacter } from "./services/charactersService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    loader: async () => {
      return await getCharacter();
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
