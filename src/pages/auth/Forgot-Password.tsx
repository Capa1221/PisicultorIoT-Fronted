import { useState, FormEvent } from 'react';
import logoSistema from '../../assets/54705961_transparente.png';
import heroImage from '../../assets/AgricultorIoT.jpeg';
import { handleInputChange } from '../../utils/utils';
import { ForgotPasswordInterface } from '../../services/interfaces';
import { BiUser } from 'react-icons/bi';
import { crearCodigo } from '../../services/validacion-controller';

export const ForgotPassword = () => {
  const [formForgotPassword, setFormForgotPassword] = useState<ForgotPasswordInterface>({
    user: "",
    message: ""
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await crearCodigo(formForgotPassword.user!);
      if (response.status === 200) {
        setFormForgotPassword(response.data);
      }
    } catch (err) {
      console.error('Error en la solicitud', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4">
        <div>
          <img src={logoSistema} alt="JT Devs" className="lg:w-[20rem] w-[15rem]" />
        </div>
        <div className="flex flex-col items-center gap-8 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Recuperar Contraseña</h1>
        </div>

        <div className="w-full mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center mb-4 w-full max-w-md mx-auto relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BiUser className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                name="user"
                className="w-full py-2 px-10 rounded-lg outline-none border border-gray-300 focus:border-blue-500"
                placeholder="Usuario"
                value={formForgotPassword!.user}
                onChange={(e) => handleInputChange(e, setFormForgotPassword, formForgotPassword)}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <button
                type="submit"
                className="w-full bg-primary py-2 px-4 rounded-lg text-white hover:bg-blue-600 transition-colors"
              >
                Enviar Codigo de validacion
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="text-gray-500">
            ¿No tienes una cuenta?{" "}
            <a
              href="/"
              className="text-primary hover:underline transition-all"
            >
              Regresar
            </a>
          </span>
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <img
          src={heroImage}
          className="object-cover rounded-lg h-screen"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
