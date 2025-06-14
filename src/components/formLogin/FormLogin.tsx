import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Link,
  Spinner,
} from "@nextui-org/react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import logo from "@/assets/PISCICULTOR IOT-02.png";
import { postLogin } from "../../services/auth-controller";
import { decodeToken, handleInputChange } from "../../utils/utils";
import type { LoginUser } from "../../services/interfaces";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authUser, setAuthUser] = useState<LoginUser>({ usuario: "", clave: "" });
  const [errors, setErrors] = useState({ usuario: false, clave: false });

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedUser");
    if (remembered) {
      const { usuario } = JSON.parse(remembered);
      setAuthUser((prev: any) => ({ ...prev, usuario }));
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    const hasErrors = {
      usuario: !authUser.usuario.trim(),
      clave: !authUser.clave.trim(),
    };

    if (hasErrors.usuario || hasErrors.clave) {
      toast.error("Por favor completa todos los campos.");
      setErrors(hasErrors);
      return;
    }

    setErrors({ usuario: false, clave: false });
    setIsLoading(true);

    try {
      const res = await postLogin(authUser);

      if (res.status === 200) {
        const token = res.headers.authorization;
        sessionStorage.setItem("authToken", token);

        if (rememberMe) {
          localStorage.setItem("rememberedUser", JSON.stringify({ usuario: authUser.usuario }));
        } else {
          localStorage.removeItem("rememberedUser");
        }

        toast.success("Inicio de sesión exitoso");

        const payload = decodeToken(token);
        const role = payload?.role || payload?.sub;
        const route = role === "ROOT" ? "/Dashboard/Home" : "/Dashboard/Mis-Estaciones";

        setTimeout(() => {
          navigate(route);
        }, 800);
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      toast.error("Usuario o contraseña incorrecta.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Panel izquierdo */}
      <div className="relative hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to--400 text-white p-12">
        <div className="z-10">
          <img
            src={logo}
            alt="Logo de Piscicultor IoT"
            title="Piscicultor IoT"
            className="w-100 lg:w-65 mb-8 drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
          <p className="text-md max-w-md">
            Bienvenido al sistema inteligente de monitoreo y gestión para piscicultores. Automatiza, visualiza y controla desde un solo lugar.
          </p>
        </div>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L80,272C160,256,320,224,480,213.3C640,203,800,213,960,218.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Panel derecho (formulario) */}
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card shadow="lg" className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <CardHeader className="flex flex-col items-center gap-3 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Iniciar sesión</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Accede con tus credenciales</p>
            </CardHeader>

            <CardBody className="space-y-6 px-6 pt-4">
              <Input
                isRequired
                name="usuario"
                label="Usuario"
                variant="flat"
                radius="lg"
                value={authUser.usuario}
                onChange={(e) => handleInputChange(e, setAuthUser, authUser)}
                placeholder="Ingresa tu usuario"
                aria-label="Usuario"
                isInvalid={errors.usuario}
                errorMessage={errors.usuario && "Campo obligatorio"}
              />

              <Input
                isRequired
                name="clave"
                label="Contraseña"
                variant="flat"
                radius="lg"
                type={showPassword ? "text" : "password"}
                value={authUser.clave}
                onChange={(e) => handleInputChange(e, setAuthUser, authUser)}
                placeholder="Ingresa tu contraseña"
                aria-label="Contraseña"
                isInvalid={errors.clave}
                errorMessage={errors.clave && "Campo obligatorio"}
                endContent={
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="focus:outline-none"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                  </button>
                }
              />

              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                <Checkbox
                  isSelected={rememberMe}
                  onValueChange={setRememberMe}
                  size="sm"
                  aria-label="Recordarme"
                >
                  Recordarme
                </Checkbox>
                <Link href="/Olvidar-Clave" underline="hover" className="text-blue-600 hover:text-blue-800 transition-colors">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </CardBody>

            <CardFooter className="flex flex-col gap-4 px-6 pb-8">
              <Button
                type="submit"
                color="primary"
                fullWidth
                radius="lg"
                isDisabled={isLoading}
                className="font-semibold uppercase tracking-wide hover:bg-blue-300 transition-colors"
              >
                {isLoading ? <Spinner size="sm" color="white" /> : "Iniciar sesión"}
              </Button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                ¿No tienes cuenta?{" "}
                <Link href="/" underline="hover" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Regresar
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.form>
      </div>
    </div>
  );
};

export default FormLogin;
