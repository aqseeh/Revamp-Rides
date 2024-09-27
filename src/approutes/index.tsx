import Layout from "../layout";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./auth";
import Home from "@/pages/home";
import Cars from "@/pages/car";
import AboutUs from "@/pages/about-us";
import ContactUs from "@/pages/contact";
import UsedCar from "@/pages/car/used-cars";
import NewCars from "@/pages/car/newcars";
import CarDetails from "@/pages/car-details";
import Used_Car_Details from "@/pages/car/used-cars/used-car-details";
import SignOut from "@/pages/signout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/new" element={<NewCars />} />
          <Route path="/cars/:id/:makeModel" element={<CarDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cars/used" element={<UsedCar />} />
          <Route path="/car/:id/:makeModel" element={<Used_Car_Details />} />
          <Route path="/signout" element={<SignOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
