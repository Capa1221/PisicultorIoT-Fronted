import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Tilt from "react-parallax-tilt";

const developersData = [
  {
    name: "Carlos Jaimes",
    role: "Desarrollador Front-end",
    linkedin: "https://www.linkedin.com/in/carlos-jaimes-062a71277/",
    github: "https://github.com/Capa1221",
    image: null,
  },
  {
    name: "Yolima Rozo",
    role: "Desarrollador Back-end",
    linkedin: null,
    github: "https://github.com/pandita64",
    image: null,
  },
];

export const Developers = () => {
  return (
    <section
      id="desarrolladores"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        Nuestro Equipo de Desarrollo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {developersData.map((dev, index) => (
          <Tilt
            key={index}
            tiltEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.05}
            transitionSpeed={1000}
            className="rounded-xl"
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <img
                src={
                  dev.image ||
                  `https://api.dicebear.com/5.x/thumbs/svg?seed=Developer${index + 1}`
                }
                alt={dev.name}
                className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-200 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {dev.name}
              </h3>
              <p className="text-sm text-gray-500">{dev.role}</p>
              <div className="flex gap-4 mt-4">
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${dev.name}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <RiLinkedinFill size={28} />
                  </a>
                )}
                {dev.github && (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${dev.name}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <RiGithubFill size={28} />
                  </a>
                )}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};
