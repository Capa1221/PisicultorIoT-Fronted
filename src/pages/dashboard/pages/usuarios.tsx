import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { RiLineChartLine } from "react-icons/ri";
import { buscarTodosLosUsuarios } from "../../../services/usuario-controller";
import { postRegister } from "../../../services/auth-controller";
import { HeaderDashboard } from "../../../components/header/HeaderDashboard";
import { CommentSection } from "../../../components/comment-dashboard/comment";

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
    if (!registerData.email) errors.push("El correo electrónico es requerido.");
    if (!registerData.clave) errors.push("La contraseña es requerida.");
    if (registerData.clave !== registerData.confirmarClave) errors.push("Las contraseñas no coinciden.");
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
        <CommentSection mensaje="Bienvenido a la sección de administración de usuarios del sistema. Aquí puedes ver la lista de usuarios registrados, sus roles, y realizar acciones como visualizar detalles adicionales."/>
        <div className="my-8">
          <Button color="success" className="text-black" variant="bordered" onPress={onOpen}>
            Agregar Usuario
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Agregar Usuario al Sistema</ModalHeader>
                  <ModalBody>
                    <Input
                      type="text"
                      name="usuario"
                      label="Usuario"
                      placeholder="Junior_Hibernadero"
                      className="max-w-xs"
                      onChange={handleInputChange}
                      value={registerData.usuario}
                    />
                    <Input
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="junior@nextui.org"
                      className="max-w-xs"
                      onChange={handleInputChange}
                      value={registerData.email}
                    />
                    <Input
                      type="text"
                      name="nombres"
                      label="Nombre"
                      placeholder="Junior Doe"
                      className="max-w-xs"
                      onChange={handleInputChange}
                      value={registerData.nombres}
                    />
                    <Input
                      type="password"
                      name="clave"
                      label="Contraseña"
                      placeholder="********"
                      className="max-w-xs"
                      onChange={handleInputChange}
                      value={registerData.clave}
                    />
                    <Input
                      type="password"
                      name="confirmarClave"
                      label="Repetir Contraseña"
                      placeholder="********"
                      className="max-w-xs"
                      onChange={handleInputChange}
                      value={registerData.confirmarClave}
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

