import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoutes";
import { AppRoutes } from "../app/routes/AppRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
