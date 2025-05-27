import { Button } from '@nextui-org/react';
import imagenPrimaria from '../../assets/PISCICULTOR IOT-03.png';
import imageSecundaria from '../../assets/Sensores instalados en estanques y terrenos recolectando información para piscicultura y agricultura.png';
import imageTerciaria from '../../assets/Mapas de cultivo mostrando el crecimiento de plantas o peces con datos en tiempo real.png';
import imageCuarta from '../../assets/index.jpeg';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

const SecondaryImage = ({
  src,
  alt,
  positionClasses,
  rotate = false,
}: {
  src: string;
  alt: string;
  positionClasses: string;
  rotate?: boolean;
}) => (
  <img
    src={src}
    alt={alt}
    className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-full border-4 border-gray-300 shadow-md hover:scale-110 transition-transform duration-300 ${
      rotate ? 'rotate-[-12deg]' : ''
    } ${positionClasses}`}
  />
);

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
      className="min-h-[90vh] bg-white grid grid-cols-1 xl:grid-cols-8"
      aria-label="Sección principal de Pisicultura IoT"
    >
      {/* Texto principal */}
      <div className="xl:col-span-5 flex items-center justify-center p-8 xl:p-20">
        <div className="flex flex-col gap-8 max-w-3xl">
          <h1 className="text-4xl xl:text-6xl font-extrabold leading-tight text-gray-900">
            Sistema de información para <br />{' '}
            <span className="relative inline-block mt-4 px-6 py-3 border-8 border-primary text-primary bg-white rounded-xl shadow-md">
              Piscicultura <span className="text-yellow-500">IOT</span>
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -left-4 -top-4 p-2 bg-primary rounded-full shadow" />
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -right-4 -top-4 p-2 bg-primary rounded-full shadow" />
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -right-4 -bottom-4 p-2 bg-primary rounded-full shadow" />
              <RiCheckboxBlankCircleFill className="text-white text-sm absolute -left-4 -bottom-4 p-2 bg-primary rounded-full shadow" />
            </span>
          </h1>

          <p className="text-gray-600 text-xl xl:text-2xl leading-relaxed">
            Optimice su producción piscícola con tecnología IoT adaptada a sus
            necesidades. Facilitamos el monitoreo de sus estanques con soluciones
            inteligentes y precisas para una acuicultura más eficiente.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button
              color="primary"
              className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-primary text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={handleScrollToForm}
              aria-label="Desplazar al formulario de solicitud"
            >
              ¿Estás ansioso por unirte?
            </Button>
          </div>
        </div>
      </div>

      {/* Imagen principal + secundarias */}
      <div className="xl:col-span-3 flex items-center justify-center p-8 relative">
        <div className="relative flex items-center justify-center">
          {/* Imagen principal */}
          <img
            src={imagenPrimaria}
            alt="Logo o imagen representativa de Piscicultura IoT"
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>
        </div>

        {/* Imágenes decorativas secundarias */}
        <>
          <SecondaryImage
            src={imageSecundaria}
            alt="Sensores instalados en estanques y terrenos recolectando información para piscicultura y agricultura"
            positionClasses="absolute top-6 right-6"
          />
          <SecondaryImage
            src={imageTerciaria}
            alt="Mapas de cultivo mostrando el crecimiento de plantas o peces con datos en tiempo real"
            positionClasses="absolute top-6 left-6"
          />
          <SecondaryImage
            src={imageCuarta}
            alt="Vista aérea de cultivo"
            positionClasses="absolute bottom-6 left-1/4"
            rotate
          />
        </>
      </div>
    </section>
  );
};