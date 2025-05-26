// Icons
import { RiDatabase2Fill, RiBarChart2Fill } from "react-icons/ri";
import { ModalNewFormulario } from "./ModalNewFormulario";

export const Applicationform = () => {
  return (
    <div
      id="formulario-de-solicitud"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20 bg-gray-50 rounded-xl shadow-md"
    >
      {/* Sección de Acceso al Sistema */}
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px] font-extrabold text-gray-800 leading-tight">
          Acceso al Sistema
        </h1>
        <p className="text-[18px] text-gray-600 leading-relaxed">
          Completa el formulario de registro para obtener acceso al sistema de información de precisión pisicola de 
          <span className="text-primary font-semibold"> Pscicultura IOT</span>.
        </p>
        <form className="w-full flex flex-col items-center">
          <div className="relative">
            <ModalNewFormulario />
          </div>
        </form>
      </div>

      {/* Sección de Servicios */}
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <RiBarChart2Fill className="text-5xl p-3 bg-secondary text-primary rounded-lg" />
          <div>
            <h3 className="text-[22px] font-bold text-gray-800">Visualización de Datos</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Transforma datos complejos en gráficos claros y comprensibles para facilitar el análisis y la toma de decisiones informadas.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <RiDatabase2Fill className="text-5xl p-3 bg-secondary text-primary rounded-lg" />
          <div>
            <h3 className="text-[22px] font-bold text-gray-800">Gestión de Información</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Administra eficientemente grandes volúmenes de datos, optimizando los procesos de almacenamiento y acceso a la información crítica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
