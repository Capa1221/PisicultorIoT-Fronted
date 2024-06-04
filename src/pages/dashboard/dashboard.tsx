import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { HeaderDashboard } from "../../components/header/HeaderDashboard";
import Home from "./pages/Home";
import Hibernaderos from "./pages/Invernaderos";
import Usuarios from "./pages/usuarios";
import Reports from "./pages/reports";

export const Dashboard = () => {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="hibernaderos" element={<Hibernaderos />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
};

