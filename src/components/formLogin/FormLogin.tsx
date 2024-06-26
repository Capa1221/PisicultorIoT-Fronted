import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSistema from '../../assets/54705961_transparente.png';
import heroImage from '../../assets/AgricultorIoT.jpeg';
import { postLogin } from '../../services/auth-controller';
import { LoginUser } from '../../services/interfaces/auth-interface';
import { decodeToken, handleInputChange } from '../../utils/utils';

export const FormLogin = () => {

  const [authUser, setAuthUser] = useState<LoginUser>({ usuario: '', clave: '' });
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await postLogin(authUser);

      if (response.status === 200) {
        const token = response.headers.authorization;
        sessionStorage.setItem('authToken', token);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error en la solicitud', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen ">
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
                name="usuario"
                className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                placeholder="Usuario"
                value={authUser.usuario}
                onChange={(e)=>handleInputChange(e, setAuthUser, authUser)}
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                name="clave"
                className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                placeholder="Password"
                value={authUser.clave}
                onChange={(e)=>handleInputChange(e, setAuthUser, authUser)}
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
      <div className="hidden lg:flex justify-center ">
        <img
          src={heroImage}
          className="object-cover rounded-lg h-screen"
        />
      </div>
    </div>
  );
};
function jwt_decode(token: any): any {
  throw new Error('Function not implemented.');
}

