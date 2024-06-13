import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Spinnerlazyload from './components/spinner/spinner-lazy-load';


function App() {

  const Index = lazy(() => import('./pages/index'));
  const Login = lazy(() => import('./pages/login/Login'));
  const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<Spinnerlazyload/>}>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Iniciar-Sesion' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
