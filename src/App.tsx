import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Spinnerlazyload from './components/spinner/spinner-lazy-load';


function App() {

  const Index = lazy(() => import('./pages/index/index'));
  const Login = lazy(() => import('./pages/auth/Login'));
  const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));
  const ForgotPassword = lazy(() => import('./pages/auth/Forgot-Password'));
  const ValidarCodigo = lazy(() => import('./pages/auth/Validar-Codigo'));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinnerlazyload />}>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Iniciar-Sesion' element={<Login />} />
            <Route path='/Olvidar-Clave' element={<ForgotPassword />} />
            <Route path="/Validar-Codigo/:usuario" element={<ValidarCodigo />} />
            <Route path='/Dashboard/*' element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
