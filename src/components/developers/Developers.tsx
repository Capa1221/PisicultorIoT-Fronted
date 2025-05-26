// Icons
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

// Array de desarrolladores con información, incluyendo la imagen opcional
const developersData = [
  {
    name: "Carlos Jaimes",
    role: "Desarrollador Front-end",
    linkedin: "https://www.linkedin.com/in/carlos-jaimes-062a71277/",
    github: "https://github.com/Capa1221",
    image: null, // Cambia a la URL de la imagen, ej: "/images/carlos.jpg"
  },
  {
    name: "Yolima Rozo",
    role: "Desarrollador Back-end",
    github: "https://github.com/pandita64",
    image: null, // Cambia a la URL de la imagen, ej: "/images/yolima.jpg"
  },
  {
    name: "Andersson Julian Muños Bustos",
    role: "Desarrollador Front-end",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/Mankatico",
    image: null,
  },
  {
    name: "Eivar Javier Mora Bastos",
    role: "Desarrollador Back-end",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/EivarMora",
    image: null, 
  },
];

export const Developers = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100" id="desarrolladores">
      <h1 className="text-4xl text-center font-black">Desarrolladores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {developersData.map((developer, index) => (
          <div
            key={index}
            className="bg-white group rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex justify-center py-4">
              <img
                src={
                  developer.image ||
                  `https://api.dicebear.com/5.x/thumbs/svg?seed=Developer${index + 1}`
                }
                className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
                alt={developer.name}
              />
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <h3 className="font-semibold text-xl">{developer.name}</h3>
              <p className="text-gray-600">{developer.role}</p>
              <div className="flex items-center">
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-600 hover:border-cyan-600 hover:border-2 rounded-full transition-all"
                >
                  <RiLinkedinFill size={24} />
                </a>
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-600 hover:border-cyan-600 hover:border-2 rounded-full transition-all"
                >
                  <RiGithubFill size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};