import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../features/Authentication/Login";
import { Signup } from "../features/Authentication/Signup";
import { Marketplace } from "../pages/marketplace/Marketplace";
import { Home } from "../layouts/Home/Home";
import { FC } from "react";
export const AppRoutes = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
};
