import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSistema from '../../assets/54705961_transparente.png';
import heroImage from '../../assets/AgricultorIoT.jpeg';
import { postLogin } from '../../services/auth-controller';

export const FormLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await postLogin({ usuario: email, clave: password });

      if (response.status === 200) {
        const token = response.data.bearer;
        sessionStorage.setItem('authToken', token);
        sessionStorage.setItem('userEmail', email);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error en la solicitud', err);
      window.alert('Hubo un problema con la solicitud, revise que las credenciales sean las correctas');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4">
        <div>
          <img src={logoSistema} alt="JT Devs" className='lg:w-[20rem] w-[15rem]' />
        </div>
        <div className="flex flex-col items-center gap-8 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Bienvenido</h1>
        </div>
        
        <div className="w-full mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full max-w-md mx-auto flex items-center justify-between text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Recordarme</label>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-900 transition-all"
                >
                  ¿Olvidaste tu password?
                </a>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <button
                type="submit"
                className="w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="text-gray-500">
            ¿No tienes cuenta?{" "}
            <a
              href="/"
              className="text-gray-900 hover:underline transition-all"
            >
              Regresar
            </a>
          </span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
        <img
          src={heroImage}
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
