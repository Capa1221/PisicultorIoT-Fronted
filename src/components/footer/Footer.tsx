import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

// Data for social links
const socialLinks = [
  {
    href: 'https://www.facebook.com/iser.pamplona',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    alt: 'Facebook',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/iser1956/',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    alt: 'Instagram',
    label: 'Instagram',
  },
  {
    href: 'https://twitter.com/Iser1956',
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384065.png',
    alt: 'Twitter',
    label: 'Twitter',
  },
];

// Data for contact information
const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="w-5 h-5 text-gray-600" />,
    text: 'Pamplona, N. de Santander',
  },
  {
    icon: <FaEnvelope className="w-5 h-5 text-gray-600" />,
    text: 'iserpam@iser.edu.co',
  },
  {
    icon: <FaPhone className="w-5 h-5 text-gray-600" />,
    text: '+57(7) 568-2597 | Fax: +57(7) 568 1736',
  },
];

// Reusable Social Link Component
const SocialLink = ({ href, icon, alt, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-700 hover:bg-gray-300 p-2 rounded-lg transition-colors"
    aria-label={`Visitar ${label}`}
  >
    <img src={icon} alt={alt} className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

// Reusable Contact Item Component
const ContactItem = ({ icon, text }) => (
  <li className="flex items-center gap-3 text-gray-700">
    {icon}
    <span>{text}</span>
  </li>
);

export const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full p-6 sm:p-8 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* General Information */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Pscicultura <span className="text-primary font-bold">IOT</span>
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
          Tu aliado en la revolución acuícola, transformando datos en decisiones inteligentes para una piscicultura más eficiente y sostenible con tecnología de vanguardia.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-base font-semibold mb-4 uppercase text-gray-800">Menú</h2>
          <nav className="flex flex-col gap-3">
            {['Tecnologías', 'Características', 'Desarrolladores', 'Formulario de Solicitud'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-yellow-500 transition-colors"
                aria-label={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-base font-semibold mb-4 uppercase text-gray-800">Redes Sociales</h2>
          <nav className="flex flex-col gap-3">
            {socialLinks.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-semibold mb-4 uppercase text-gray-800">Contacto</h2>
          <ul className="flex flex-col gap-3">
            {contactInfo.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-700 text-sm">
        <p>
          © 2024{' '}
          <span className="text-primary font-bold">
          Pscicultura <span className="text-yellow-500">IOT</span>
          </span>
          . Todos los derechos reservados.
        </p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Términos y Condiciones">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Política de Privacidad">
            Política de Privacidad
          </a>
        </nav>
      </div>
    </footer>
  );
};
