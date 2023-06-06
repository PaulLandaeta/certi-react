import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/Layout";
import ClientsPage from "./pages/ClientsPage";
import ProductsPage from "./pages/ProductsPage";
import { getClients } from "./services/clientsService";
import ErrorPage from "./pages/ErrorPage";
import AddClientPage from "./pages/AddClientPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Home",
    element: <LayoutPage />,
    children: [
      {
        path: "dashboard",
        element: <HomePage />,
      },
      {
        path: "clients",
        element: <ClientsPage />,
        loader: async () => {
          return await getClients();
        },
        errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "add-client/:clientId?",
        element: <AddClientPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
