import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, } from "@nextui-org/react";
import imagenSistema from "../../assets/54705961_transparen.png";

export const Header = () => {
  const menuItems = [
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Características", href: "#caracteristicas" },
    { name: "Desarrolladores", href: "#desarrolladores" },
    { name: "Formulario de Solicitud", href: "#formulario-de-solicitud" },
    { name: "Iniciar Sesión", href: "/iniciar-sesion" },
  ];

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar disableAnimation isBordered className="bg-primary text-white p-4">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img
            src={imagenSistema}
            alt="Logo del sistema"
            className="h-[10rem] w-auto"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            src={imagenSistema}
            alt="Logo del sistema"
            className="h-[10rem] w-auto"
          />
        </NavbarBrand>
        {menuItems.slice(0, -1).map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              aria-current="page"
              className="text-white text-xl hover:underline hover:text-gray-300"
              onClick={(event) => handleScroll(event, item.href)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href={menuItems[menuItems.length - 1].href}
            variant="bordered"
            className="bg-primary text-white border-opacity-hover"
          >
            {menuItems[menuItems.length - 1].name}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.slice(0, -1).map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
              onClick={(event) => handleScroll(event, item.href)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem key={`${menuItems[menuItems.length - 1].name}`}>
          <Link
            className="w-full"
            color="foreground"
            href={menuItems[menuItems.length - 1].href}
            size="lg"
          >
            {menuItems[menuItems.length - 1].name}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
