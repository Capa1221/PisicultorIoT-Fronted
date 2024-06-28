import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSistema from '../../assets/54705961_transparente.png';
import heroImage from '../../assets/AgricultorIoT.jpeg';
import { postLogin } from '../../services/auth-controller';
import { handleInputChange } from '../../utils/utils';
import { LoginUser } from '../../services/interfaces';
import { Link } from '@nextui-org/react';

export const FormLogin = () => {
  const navigate = useNavigate();

  // Estado para los datos de inicio de sesión
  const [authUser, setAuthUser] = useState<LoginUser>({
    usuario: '',
    clave: '',
  });

  // Estado para recordar sesión
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Función para manejar el envío del formulario
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await postLogin(authUser);

      if (response.status === 200) {
        const token = response.headers.authorization;
        sessionStorage.setItem('authToken', token);

        // Guardar en localStorage si el usuario ha seleccionado Recordarme
        if (rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify(authUser));
        } else {
          localStorage.removeItem('rememberedUser');
        }

        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error en la solicitud', err);
    }
  };

  // Cargar los datos de inicio de sesión recordados al iniciar el componente
  useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      setAuthUser(JSON.parse(rememberedUser));
      setRememberMe(true);
    }
  }, []);

  // Función para cambiar el estado de Recordarme
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen ">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4">
        <div>
          <img src={logoSistema} className='lg:w-[20rem] w-[15rem]' alt="Logo Sistema" />
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
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                />
                <label htmlFor="remember">Recordarme</label>
              </div>
              <div>
                <Link
                  href="/Olvidar-Clave"
                  className="transition-all"
                >
                  ¿Olvidaste tu password?
                </Link>
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
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default FormLogin;
