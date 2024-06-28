import { useState, FormEvent } from 'react';
import logoSistema from '../../assets/54705961_transparente.png';
import heroImage from '../../assets/AgricultorIoT.jpeg';
import { handleInputChange } from '../../utils/utils';
import { ForgotPasswordInterface } from '../../services/interfaces';
import { BiUser } from 'react-icons/bi';
import { crearCodigo } from '../../services/validacion-controller';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formForgotPassword, setFormForgotPassword] = useState<ForgotPasswordInterface>({
    user: "",
    message: ""
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await crearCodigo(formForgotPassword.user!);
      if (response.status === 200) {
        console.log(response.data);
        confirm("Se ha enviado un código de verificación para restablecer su contraseña. Por favor, revíselo y tráigalo para seguir con el debido proceso.");
        navigate("")
      }
    } catch (err) {
      console.error('Error en la solicitud', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-8">
        <div>
          <img src={logoSistema} className="lg:w-[20rem] w-[15rem]" />
        </div>
        <div className="flex flex-col items-center gap-6 mt-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Recuperar Contraseña</h1>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center w-full max-w-md mx-auto relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BiUser className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                name="user"
                className="w-full py-2 pl-10 pr-4 rounded-lg outline-none border border-gray-300 focus:border-blue-500"
                placeholder="Usuario"
                value={formForgotPassword.user}
                onChange={(e) => handleInputChange(e, setFormForgotPassword, formForgotPassword)}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <button
                type="submit"
                className="w-full bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600 transition-colors"
              >
                Enviar Código de Validación
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <span className="text-gray-500">
            ¿No tienes una cuenta?{" "}
            <a href="/" className="text-blue-500 hover:underline transition-all">
              Regresar
            </a>
          </span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <img src={heroImage} alt="Hero" className="object-cover rounded-lg h-screen" />
      </div>
    </div>
  );
};

export default ForgotPassword;
