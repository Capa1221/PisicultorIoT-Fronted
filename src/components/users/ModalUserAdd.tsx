import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { BiEnvelope, BiLock, BiUser } from "react-icons/bi";
import { GrFormAdd } from "react-icons/gr";
import { RegisterUser } from "../../services/interfaces";
import { postRegister } from "../../services/auth-controller";
import { handleInputChange } from "../../utils/utilsHandle";

export const ModalUserAdd = () => {

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken")!;
  const [userAdd, setUserAdd] = useState<RegisterUser>({
    usuario: "",
    nombres: "",
    email: "",
    clave: "",
  });

  const handleCrearUsuario = async () => {
    try {
      const response = await postRegister(userAdd,token);
      console.log(response);
      if (response.status === 200) {
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al crear el formulario", error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" className="mb-2" startContent={<GrFormAdd />}>Añadir Usuario</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Añadir Usuario</ModalHeader>
              <ModalBody className="space-y-1">
                <div className="flex space-x-1">
                  <Input
                    isRequired
                    type="text"
                    name="usuario"
                    value={userAdd.usuario}
                    onChange={(e)=>handleInputChange(e,setUserAdd,userAdd)}
                    label="Usuario"
                    startContent={<BiUser className="text-2xl" />}
                  />
                  <Input
                    isRequired
                    type="text"
                    name="nombres"
                    value={userAdd.nombres}
                    onChange={(e)=>handleInputChange(e,setUserAdd,userAdd)}
                    label="Nombre"
                    startContent={<BiUser className="text-2xl" />}
                  />
                </div>
                <Input
                  isRequired
                  type="email"
                  name="email"
                  value={userAdd.email}
                    onChange={(e)=>handleInputChange(e,setUserAdd,userAdd)}
                  label="Email"
                  startContent={<BiEnvelope className="text-2xl" />}
                />
                <Input
                  isRequired
                  type="password"
                  name="clave"
                  value={userAdd.clave}
                  onChange={(e)=>handleInputChange(e,setUserAdd,userAdd)}
                  label="Clave"
                  startContent={<BiLock className="text-2xl" />}
                />
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleCrearUsuario}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
