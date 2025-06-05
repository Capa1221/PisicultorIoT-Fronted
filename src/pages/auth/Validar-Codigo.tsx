import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logoSistema from '../../assets/PISCICULTOR IOT-02.png';
import heroImage from '../../assets/PISCICULTOR IOT-02.png';
import { handleInputChange } from '../../utils/utils';
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { validarCodigo } from '../../services/validacion-controller';

export const ValidarCodigo = () => {
  const { usuario } = useParams<{ usuario: string }>();
  const navigate = useNavigate();
  const [formValidarCodigo, setFormValidarCodigo] = useState<{ user: string; codigo: string }>({
    user: usuario || "",
    codigo: ""
  });

  useEffect(() => {
    if (usuario) {
      setFormValidarCodigo((prevState) => ({
        ...prevState,
        user: usuario
      }));
    }
  }, [usuario]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await validarCodigo(formValidarCodigo.user, formValidarCodigo.codigo);
      if (response.status === 200) {
        alert("Código de verificación validado correctamente. Proceda a restablecer su contraseña.");
        sessionStorage.setItem("authToken",response.headers.authorization);
        sessionStorage.setItem("userAjustes",response.data.id!);
        navigate("/Dashboard/Ajustes-Perfil")
      }
    } catch (err) {
      console.error('Error en la validación del código', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-8">
        <div>
          <img src={logoSistema} alt="JT Devs" className="lg:w-[20rem] w-[15rem]" />
        </div>
        <div className="flex flex-col items-center gap-6 mt-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Validar Código de Verificación</h1>
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
                value={formValidarCodigo.user}
                onChange={(e) => handleInputChange(e, setFormValidarCodigo, formValidarCodigo)}
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-md mx-auto relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BiLockAlt className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                name="codigo"
                className="w-full py-2 pl-10 pr-4 rounded-lg outline-none border border-gray-300 focus:border-blue-500"
                placeholder="Código de Verificación"
                value={formValidarCodigo.codigo}
                onChange={(e) => handleInputChange(e, setFormValidarCodigo, formValidarCodigo)}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <button
                type="submit"
                className="w-full bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600 transition-colors"
              >
                Validar Código
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <span className="text-gray-500">
            ¿No tienes un Codigo?{" "}
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

export default ValidarCodigo;
