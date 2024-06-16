import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { RiLineChartLine, RiLockPasswordLine } from "react-icons/ri";
import { buscarTodosLosUsuarios } from "../../../services/usuario-controller";
import { postRegister } from "../../../services/auth-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";
import { BiMailSend, BiUserCircle } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

interface Usuario {
  id: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

const columns = [
  {
    name: "ID",
    selector: (row: Usuario) => row.id,
  },
  {
    name: "Nombre",
    selector: (row: Usuario) => row.nombres,
  },
  {
    name: "Correo",
    selector: (row: Usuario) => row.email,
  },
  {
    name: "Acciones",
    cell: () => (
      <Button color="primary">
        Ver<RiLineChartLine />
      </Button>
    ),
  },
];

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [registerData, setRegisterData] = useState({
    usuario: '',
    nombres: '',
    email: '',
    clave: '',
    confirmarClave: ''
  });
  const token = sessionStorage.getItem("authToken");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await buscarTodosLosUsuarios(token);
          setUsuarios(response.data);
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch usuarios:", error);
      }
    };

    fetchData();
  }, [token]);

  const validate = () => {
    const errors: string[] = [];
    if (!registerData.usuario) errors.push("El nombre de usuario es requerido.");
    if (!registerData.nombres) errors.push("El nombre es requerido.");
    if (!registerData.email) errors.push("El correo electr�nico es requerido.");
    if (!registerData.clave) errors.push("La contrase�a es requerida.");
    if (registerData.clave !== registerData.confirmarClave) errors.push("Las contrase�as no coinciden.");
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async () => {
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      alert(validationErrors.join("\n"));
      return;
    }

    try {
      if (token) {
        const { confirmarClave, ...registerPayload } = registerData;
        await postRegister(registerPayload, token);
        onOpenChange();
        const response = await buscarTodosLosUsuarios(token);
        setUsuarios(response.data);
      } else {
        console.error("Token is null");
      }
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };

  return (
    <div>
      <HeaderDashboard mensaje="Usuarios en el sistema" />
      <div className="p-8">
        <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí puedes ver la lista de usuarios registrados, realizar acciones como visualizar detalles adicionales." />
        <div className="my-8">
          <Button color="primary" onPress={onOpen}>
            Agregar Usuario
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
            <ModalContent className="w-full">
              {(onClose) => (
                <>
                  <ModalHeader className="justify-center">Agregar Usuario</ModalHeader>
                  <ModalBody>
                    <div className="flex space-x-2">
                    <Input
                      type="text"
                      name="Usuario"
                      label="Usuario"
                      placeholder="Jhon_Example"
                      isRequired
                      maxLength={10}
                      startContent={
                        <BsPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                    <Input
                      type="email"
                      name="email"
                      label="Email"
                      isRequired
                      maxLength={50}
                      placeholder="example@example.org"
                      onChange={handleInputChange}
                      value={registerData.email}
                      startContent={
                        <BiMailSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                    </div>
                    <Input
                      type="text"
                      name="nombres"
                      label="Nombre"
                      placeholder="Junior Doe Example"
                      isRequired
                      maxLength={100}
                      onChange={handleInputChange}
                      value={registerData.nombres}
                      startContent={
                        <BiUserCircle className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                    <Input
                      type="password"
                      name="clave"
                      label="Contraseña"
                      placeholder="********"
                      isRequired
                      maxLength={15}
                      onChange={handleInputChange}
                      value={registerData.clave}
                      startContent={
                        <RiLockPasswordLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                    <Input
                      type="password"
                      name="confirmarClave"
                      label="Repetir Contraseña"
                      placeholder="********"
                      isRequired
                      maxLength={15}
                      onChange={handleInputChange}
                      value={registerData.confirmarClave}
                      startContent={
                        <RiLockPasswordLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button color="primary" onPress={handleRegister}>
                      Guardar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <DataTable columns={columns} data={usuarios} />
      </div>
    </div>
  );
};

