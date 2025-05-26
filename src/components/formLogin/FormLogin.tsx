import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import logoSistema from "../../assets/PISCICULTOR IOT-02.png";
import heroImage from "../../assets/Piscicultura IoT con.png";
import { postLogin } from "../../services/auth-controller";
import { decodeToken, handleInputChange } from "../../utils/utils";
import { LoginUser } from "../../services/interfaces";
import { Button, Link } from "@nextui-org/react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import toast from "react-hot-toast";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authUser, setAuthUser] = useState<LoginUser>({
    usuario: "",
    clave: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!authUser.usuario || !authUser.clave) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    try {
      const response = await postLogin(authUser);

      if (response.status === 200) {
        const token = response.headers.authorization;
        sessionStorage.setItem("authToken", token);

        rememberMe
          ? localStorage.setItem("rememberedUser", JSON.stringify(authUser))
          : localStorage.removeItem("rememberedUser");

        const userRole = decodeToken(token)?.sub;
        toast.success("Inicio de sesión exitoso");

        setTimeout(() => {
          navigate(
            userRole === "ROOT"
              ? "/Dashboard/Home"
              : "/Dashboard/Mis-Estaciones"
          );
        }, 1000);
      }
    } catch (err) {
      toast.error("Usuario o contraseña incorrecta.");
      console.error("Error en el login", err);
    }
  };

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedUser");
    if (remembered) {
      setAuthUser(JSON.parse(remembered));
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-gray-50">
      {/* Lado Izquierdo */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
        <img src={logoSistema} alt="Logo del Sistema" className="w-[15rem] lg:w-[20rem] mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Bienvenido</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          {/* Usuario */}
          <input
            type="text"
            name="usuario"
            autoFocus
            aria-label="Usuario"
            className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Usuario"
            value={authUser.usuario}
            onChange={(e) => handleInputChange(e, setAuthUser, authUser)}
          />

          {/* Contraseña */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="clave"
              aria-label="Contraseña"
              className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Contraseña"
              value={authUser.clave}
              onChange={(e) => handleInputChange(e, setAuthUser, authUser)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
            </button>
          </div>

          {/* Recordarme */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Recordarme
            </label>
            <Link href="/Olvidar-Clave" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botón */}
          <Button type="submit" className="w-full bg-primary text-white font-bold">
            Iniciar sesión
          </Button>
        </form>

        <p className="mt-6 text-gray-500">
          ¿No tienes cuenta?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Regresar
          </a>
        </p>
      </div>

      {/* Lado Derecho */}
      <div className="hidden lg:flex items-center justify-center">
        <img src={heroImage} alt="Imagen hero" className="object-cover rounded-lg h-screen" />
      </div>
    </div>
  );
};

export default FormLogin;
