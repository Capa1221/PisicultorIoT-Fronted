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
    "Inicio",
    "Tecnologías",
    "Características",
    "Desarrolladores",
    "Formulario de Solicitud",
    "Iniciar Sesión",
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-primary text-white">
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
            <Link href="#" aria-current="page" className="text-white hover:text-blue-500">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end" className="hidden lg:flex sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="/Iniciar-Sesion"
            variant="bordered"
            className="text-white hover:text-blue-300"
          >
            {menuItems[menuItems.length - 1]}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
