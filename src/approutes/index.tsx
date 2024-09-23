import Layout from "../layout";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./auth";
import Home from "@/pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route element={<AuthRequired />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
