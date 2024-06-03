import React from "react";
// Icons
import { RiSearch2Line } from "react-icons/ri";

export const HeaderDashboard = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">
        🌞 Hey, has vuelto <span className="text-primary">Jorge</span>
      </h1>
    </header>
  );
};
