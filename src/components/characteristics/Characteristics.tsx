import Grafica1 from '../../assets/CARACTERISTICAS/2.png';
import Grafica2 from '../../assets/CARACTERISTICAS/1.png';
import Grafica3 from '../../assets/CARACTERISTICAS/3.png';
import Grafica4 from '../../assets/CARACTERISTICAS/4.png';
import Grafica5 from '../../assets/CARACTERISTICAS/5.png';

// Data for each characteristic card
const characteristicsData = [
  {
    image: Grafica1,
    alt: 'Monitoreo Agrícola',
    date: 'IoT Agriculture System - Julio 3, 2024',
    title: 'Monitoreo Agrícola',
    description:
      'Supervisión de condiciones agrícolas mediante sensores IoT para decisiones optimizadas.',
  },
  {
    image: Grafica2,
    alt: 'Variedad de Estaciones',
    date: 'IoT Agriculture System - Julio 3, 2024',
    title: 'Variedad de Estaciones',
    description:
      'Plataforma flexible para estaciones agrícolas más allá de cultivos e invernaderos.',
  },
  {
    image: Grafica3,
    alt: 'Asociaciones de Estaciones',
    date: 'IoT Agriculture System - Julio 3, 2024',
    title: 'Gestión de Asociaciones',
    description:
      'Facilitación de asociaciones de estaciones de monitoreo para mejora en la gestión agrícola.',
  },
  {
    image: Grafica4,
    alt: 'Sistema Escalable',
    date: 'IoT Agriculture System - Julio 3, 2024',
    title: 'Sistema Escalable',
    description:
      'Escalabilidad y adaptabilidad del sistema para diversos usuarios y requisitos agrícolas.',
  },
  {
    image: Grafica5,
    alt: 'Variedad de Gráficas para el Análisis de Datos de los Sensores',
    date: 'IoT Agriculture System - Julio 3, 2024',
    title: 'Variedad de Gráficas para Análisis de Datos de Sensores',
    description:
      'Gráficos avanzados para análisis detallado de datos de sensores, incluyendo líneas, barras y dispersión.',
  },
];

// Reusable Characteristic Card Component
const CharacteristicCard = ({ image, alt, date, title, description }) => (
  <div className="flex flex-col gap-4 transition-transform transform hover:scale-105">
    <img
      src={image}
      className="w-full h-48 object-cover rounded-lg shadow-md"
      alt={alt}
      loading="lazy"
    />
    <p className="text-sm text-gray-500">{date}</p>
    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export const Characteristics = () => {
  return (
    <section
      id="caracteristicas"
      className="p-6 sm:p-8 lg:p-16 bg-gray-50"
      aria-labelledby="caracteristicas-title"
    >
      <div className="mb-10 text-center">
        <h1
          id="caracteristicas-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 text-gray-900"
        >
          Características
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Visualizamos y simplificamos datos complejos para análisis eficaz y fácil comprensión.
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {characteristicsData.map((item, index) => (
          <CharacteristicCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};