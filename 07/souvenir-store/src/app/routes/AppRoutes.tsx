import { useState } from "react";
import { Navigate, Route, Routes, Switch } from "react-router-dom";
import { SouvenirPage } from "../pages/SouvenirPage";
import { GuardedRoute } from "../../guards/GuaardedRoute";
import { useStore } from "../../context/ContextProvider";

export const AppRoutes = () => {
  const { auth } = useStore();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuardedRoute auth={auth}>
            <SouvenirPage />
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
