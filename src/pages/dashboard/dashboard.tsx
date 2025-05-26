import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Spinnerlazyload from "../../components/spinner/spinner-lazy-load";
import { ProtectedRoutes } from "../../components/protectedRoutes/ProtectedRoutes";

export const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const MainRoutes = lazy(() => import('../../routes/MainRoutes'));

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen relative">
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Suspense fallback={<Spinnerlazyload />}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/*" element={<MainRoutes />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
