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
import imagenSistema from "../../assets/54705961_transparen.png";

export const Header = () => {
  const menuItems = [
    { name: "Inicio", href: "/inicio" },
    { name: "Tecnologías", href: "/tecnologias" },
    { name: "Características", href: "/caracteristicas" },
    { name: "Desarrolladores", href: "/desarrolladores" },
    { name: "Formulario de Solicitud", href: "/formulario-de-solicitud" },
    { name: "Iniciar Sesión", href: "/iniciar-sesion" },
  ];

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
        {menuItems.slice(1, -1).map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} aria-current="page" className="text-white text-xl hover:underline hover:text-gray-300 ">
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
            className="text-white bg-green-500 hover:bg-green-600"
          >
            {menuItems[menuItems.length - 1].name}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
