import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/dashboard/dashboard';
import { Index } from './pages/index';
import { Login } from './pages/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Iniciar-Sesion' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
