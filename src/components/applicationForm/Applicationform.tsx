// Icons
import { RiDatabase2Fill, RiBarChart2Fill } from "react-icons/ri";
import { ModalNewFormulario } from "./ModalNewFormulario";

export const Applicationform = () => {
  return (
    <div
      id="formulario-de-solicitud"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Acceso al Sistema</h1>
        <p className="text-[20px] text-gray-500">
          Completa el formulario de registro para obtener acceso al sistema de informaci�n de precisi�n agr�cola de Agricultor IOT.
        </p>
        <form className="w-full">
          <div className="relative">
            <ModalNewFormulario />
          </div>
        </form>
      </div>
      {/* Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiBarChart2Fill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Visualizaci�n de Datos</h3>
          <p className="text-gray-500">
            Transforma datos complejos en gr�ficos claros y comprensibles para facilitar el an�lisis y la toma de decisiones informadas.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiDatabase2Fill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Gesti�n de Informaci�n</h3>
          <p className="text-gray-500">
            Administra eficientemente grandes vol�menes de datos, optimizando los procesos de almacenamiento y acceso a la informaci�n cr�tica.
          </p>
        </div>
      </div>
    </div>
  );
};
