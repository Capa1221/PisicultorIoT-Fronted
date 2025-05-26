import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import imagenSistema from "../../assets/PISCICULTOR IOT_Mesa de trabajo 1.png";
import imagenFondo from "../../assets/PISCICULTOR IOT-03.png";
import { motion } from "framer-motion";

export const Header = () => {
  const menuItems = [
<<<<<<< Updated upstream
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Características", href: "#caracteristicas" },
=======
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Caracteristicas", href: "#caracteristicas" },
>>>>>>> Stashed changes
    { name: "Desarrolladores", href: "#desarrolladores" },
    { name: "Formulario de Solicitud", href: "#formulario-de-solicitud" },
    { name: "Iniciar Sesión", href: "/iniciar-sesion" },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.1 },
    },
  };

  return (
    <Navbar
      isBordered
      disableAnimation
      className="custom-navbar text-white px-6 py-4 shadow-md relative"
      style={{
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Toggle menú mobile */}
      <NavbarContent className="sm:hidden z-10" justify="start">
        <NavbarMenuToggle aria-label="Abrir menú" />
      </NavbarContent>

      {/* Logo para mobile */}
      <NavbarContent className="sm:hidden pr-3 z-10" justify="center">
        <NavbarBrand>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeDown}
            src={imagenSistema}
            alt="Logo"
            className="h-16 w-auto"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Logo + enlaces grandes */}
      <NavbarContent className="hidden sm:flex gap-6 z-10" justify="center">
        <NavbarBrand>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeDown}
            src={imagenSistema}
            alt="Logo"
            className="h-20 w-auto"
          />
        </NavbarBrand>
        {menuItems.slice(0, -1).map((item, index) => (
          <motion.div
            key={item.name}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 80,
                },
              },
            }}
          >
            <NavbarItem>
              <Link
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-white text-base font-medium hover:text-gray-200 transition-colors"
              >
                {item.name}
              </Link>
            </NavbarItem>
          </motion.div>
        ))}
      </NavbarContent>

      {/* Botón Iniciar Sesión */}
      <NavbarContent justify="end" className="hidden sm:flex z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <NavbarItem>
            <Button
              as={Link}
              href={menuItems.at(-1)?.href}
              variant="bordered"
              className="text-white border-white hover:bg-white hover:text-primary transition-colors"
            >
              {menuItems.at(-1)?.name}
            </Button>
          </NavbarItem>
        </motion.div>
      </NavbarContent>

      {/* Menú mobile desplegable */}
      <NavbarMenu className="z-10 bg-white text-primary">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="w-full text-lg font-medium text-primary hover:text-primary/70 transition-colors"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
