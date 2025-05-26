import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoSistema from "../../assets/PISCICULTOR IOT-02.png"
import heroImage from "../../assets/Piscicultura IoT con.png";
import { postLogin } from "../../services/auth-controller";
import { decodeToken, handleInputChange } from "../../utils/utils";
import { LoginUser } from "../../services/interfaces";
import { Button, Link } from "@nextui-org/react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [authUser, setAuthUser] = useState<LoginUser>({
    usuario: "",
    clave: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await postLogin(authUser);

      if (response.status === 200) {
        const token = response.headers.authorization;
        sessionStorage.setItem("authToken", token);

        if (rememberMe) {
          localStorage.setItem("rememberedUser", JSON.stringify(authUser));
        } else {
          localStorage.removeItem("rememberedUser");
        }

        if (decodeToken(sessionStorage.getItem("authToken")!).sub === "ROOT") {
          console.log("Si eestoy en el ROOT");

          navigate("/Dashboard/Home");
        } else {
          console.log("Si esta ingresando");
          navigate("/Dashboard/Mis-Estaciones");
        }
      }
    } catch (err) {
      console.error("Error en la solicitud", err);
    }
  };

  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      setAuthUser(JSON.parse(rememberedUser));
      setRememberMe(true);
    }
  }, []);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-gray-50">
      {/* Left Side */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 lg:rounded-tl-lg lg:rounded-bl-lg">
        <img
          src={logoSistema}
          className="lg:w-[20rem] w-[15rem] mb-6"
          alt="Logo del Sistema"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Bienvenido
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              name="usuario"
              className="w-full py-2 px-4 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Usuario"
              value={authUser.usuario}
              onChange={(e) => handleInputChange(e, setAuthUser, authUser)}
            />
          </div>
          {/* Password Input */}
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="clave"
              className="w-full py-2 px-4 rounded-lg outline-none border border-gray-300 pr-12 focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Contraseña"
              value={authUser.clave}
              onChange={(e) => handleInputChange(e, setAuthUser, authUser)}
            />
            <button
              type="button"
              className="absolute right-2 top-2/4 transform -translate-y-2/4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
            </button>
          </div>
          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-gray-500">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={toggleRememberMe}
              />
              Recordarme
            </label>
            <Link
              href="/Olvidar-Clave"
              className="text-blue-500 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition"
          >
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
      {/* Right Side */}
      <div className="hidden lg:flex items-center justify-center ">
        <img
          src={heroImage}
          className="object-cover rounded-lg h-screen"
          alt="Imagen hero"
        />
      </div>
    </div>
  );
};

export default FormLogin;
