import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../features/Authentication/Login";
import { Signup } from "../features/Authentication/Signup";
import { Marketplace } from "../pages/marketplace/Marketplace";
import { Home } from "../layouts/Home/Home";
import { MenShoes } from "../features/Shoes/MenShoes";
import { FC } from "react";
import { Joinus } from "../features/Authentication/Joinus";
export const AppRoutes = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/menshoes" element={<MenShoes />} />
      </Routes>
    </>
  );
};
