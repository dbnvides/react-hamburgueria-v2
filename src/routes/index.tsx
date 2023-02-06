import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};
