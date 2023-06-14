import { Navigate, Route, Routes } from "react-router-dom";
import { SouvenirPage } from "../pages/SouvenirPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SouvenirPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
