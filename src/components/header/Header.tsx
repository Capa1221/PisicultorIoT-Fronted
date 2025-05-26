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

export const Header = () => {
  const menuItems = [
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Características", href: "#caracteristicas" },
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
      {/* Mobile toggle */}
      <NavbarContent className="sm:hidden z-10" justify="start">
        <NavbarMenuToggle aria-label="Abrir menú" />
      </NavbarContent>

      {/* Logo para mobile */}
      <NavbarContent className="sm:hidden pr-3 z-10" justify="center">
        <NavbarBrand>
          <img src={imagenSistema} alt="Logo" className="h-16 w-auto" />
        </NavbarBrand>
      </NavbarContent>

      {/* Logo y enlaces para pantallas grandes */}
      <NavbarContent className="hidden sm:flex gap-6 z-10" justify="center">
        <NavbarBrand>
          <img src={imagenSistema} alt="Logo" className="h-20 w-auto" />
        </NavbarBrand>
        {menuItems.slice(0, -1).map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-white text-base font-medium hover:text-gray-200 transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botón para iniciar sesión */}
      <NavbarContent justify="end" className="hidden sm:flex z-10">
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
      </NavbarContent>

      {/* Menú para móviles */}
      <NavbarMenu className="z-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
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
