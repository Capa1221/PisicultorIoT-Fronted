import { Button } from '@nextui-org/react';
import imagenPrimaria from '../../assets/PISCICULTOR IOT-03.png';
import imageSecundaria from '../../assets/Sensores instalados en estanques y terrenos recolectando información para piscicultura y agricultura.png';
import imageTerciaria from '../../assets/Mapas de cultivo mostrando el crecimiento de plantas o peces con datos en tiempo real.png';
import imageCuarta from '../../assets/index.jpeg';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

export const Hero = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('formulario-de-solicitud');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 bg-white"
    >
      {/* Texto principal */}
      <div className="xl:col-span-5 flex items-center justify-center p-8 xl:p-20">
        <div className="flex flex-col gap-8 max-w-3xl">
          <h1 className="text-4xl xl:text-6xl font-extrabold leading-tight text-gray-900">
            Sistema de información para agricultura de precisión
            <br />
            <span className="relative inline-block mt-4 px-6 py-3 border-8 border-primary text-primary bg-white rounded-xl shadow-md">
              Piscicultor <span className="text-yellow-500">IOT</span>
              {/* Esquinas decorativas */}
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -left-4 -top-4 p-2 bg-primary rounded-full shadow" />
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -right-4 -top-4 p-2 bg-primary rounded-full shadow" />
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -right-4 -bottom-4 p-2 bg-primary rounded-full shadow" />
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -left-4 -bottom-4 p-2 bg-primary rounded-full shadow" />
            </span>
          </h1>
          <p className="text-gray-600 text-xl xl:text-2xl leading-relaxed">
            Optimice su producción agrícola con tecnología IoT adaptada a sus
            objetivos. Simplificamos la comprensión de la agricultura con
            soluciones precisas e inteligentes.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button
              color="primary"
              className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-primary text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={handleScrollToForm}
            >
              ¿Estás ansioso por unirte?
            </Button>
          </div>
        </div>
      </div>

      {/* Imagen central + logos */}
      <div className="xl:col-span-3 flex items-center justify-center relative p-8">
        {/* Imagen principal */}
        <div className="relative">
          <img
            src={imagenPrimaria}
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-xl border-4 border-white"
            alt="Imagen principal"
          />
          {/* Círculo decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>
        </div>

        {/* Logos secundarios */}
        <img
          src={imageSecundaria}
          className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full border-4 border-gray-300 absolute top-[12%] right-[20%] xl:right-[10%] shadow-md"
          alt="Logo 1"
        />
        <img
          src={imageTerciaria}
          className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full border-4 border-gray-300 absolute top-[8%] left-[20%] xl:left-[10%] shadow-md"
          alt="Logo 2"
        />
        <img
          src={imageCuarta}
          className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[5%] rotate-[-12deg] shadow-md"
          alt="Logo 3"
        />
      </div>
    </section>
  );
};
