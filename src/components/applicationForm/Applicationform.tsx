// Icons
import { RiDatabase2Fill, RiBarChart2Fill } from "react-icons/ri";

export const Applicationform = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Formulario de Acceso</h1>
        <p className="text-[20px] text-gray-500">
          Accede y completa el formulario de registro para que el administrador
          pueda concederte acceso al sistema de información.
        </p>
        <form className="w-full">
          <div className="relative">
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Iniciar formulario
            </button>
          </div>
        </form>
      </div>
      {/* Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex flex-col gap-2">
          <RiBarChart2Fill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Visualización de Datos</h3>
          <p className="text-gray-500">
            Convierte datos complejos en gráficos claros para facilitar el
            análisis y la toma de decisiones.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiDatabase2Fill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Gestión de Información</h3>
          <p className="text-gray-500">
            Administra eficientemente grandes volúmenes de datos y optimiza los
            procesos de almacenamiento y acceso a la información.
          </p>
        </div>
      </div>
    </div>
  );
};
