import { Button } from '@nextui-org/react';
import imagenPrimaria from '../../assets/1.jpeg';
import imageSecundaria from '../../assets/2.jpeg';
import imageTerciaria from '../../assets/index.jpeg';
import imageCuarta from '../../assets/RegisterAgricultor.jpeg';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export const Hero = () => {
  return (
    <section id="inicio" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl xl:text-5xl font-bold xl:leading-[7.5rem]">
            Sistema de informaciÃ³n para agricultura de precisiÃ³n
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
              Agricultor <span className='text-yellow-500'>IOT</span>
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Optimice su producción agrícola con la tecnología IOT adaptada a sus objetivos, lo que facilita la comprensión de la agricultura.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button color="primary" className="w-full xl:w-auto bg-primary text-white p-6 rounded-xl text-xl">
              ¿Estás ansioso por unirte?
            </Button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src={imagenPrimaria}
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28 rounded-full"
          />

        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src={imageSecundaria}
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src={imageTerciaria}
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src={imageCuarta}
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};
