import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BiEdit, BiImage } from 'react-icons/bi';
import { UserInterface } from '../../services/interfaces';
import { actualizarUsuario, buscarUsuarioPorId } from '../../services/usuario-controller';
import { handleInputChange } from '../../utils/utilsHandle';

export const ModalUserEdit = ({ id }: { id: string }) => {

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [userSistema, setUserSistema] = useState<UserInterface>();
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await buscarUsuarioPorId(id, token);
          if (response.status == 200) {
            setUserSistema(response.data);
            
          }
        } else {
          console.error("Error token");
        }
      } catch (error) {
        console.error("Error fetch user", error);
      }
    };
    fetchUser();
  }, [token]);

  const handleEditarUser = async () =>{
    try {
      if (token) {
        const response = await actualizarUsuario(userSistema!,token);
        if (response.status == 200) {
          onClose();
          window.location.reload()
        }
      } else {
        console.error("Error token");
      }
    } catch (error) {
      console.error("Error fetch user", error);
    }
  }

  return (
    <>
      <Button color="warning" startContent={<BiEdit className="text-xl" />} variant="light" onPress={onOpen}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                  <ModalHeader className="flex flex-col text-center">Editar Usuario</ModalHeader>
                  <ModalBody>
                  <Input
                        type="text"
                        name="usuario"
                        label="Usuario"
                        isRequired
                        value={userSistema!.usuario}
                        onChange={(e) => handleInputChange(e, setUserSistema, userSistema)}
                        startContent={<BiImage className="text-2xl" />}
                      />
                    <Input
                        type="text"
                        name="nombres"
                        label="Nombres"
                        isRequired
                        value={userSistema!.nombres}
                        onChange={(e) => handleInputChange(e, setUserSistema, userSistema)}
                        startContent={<BiImage className="text-2xl" />}
                      />
                    <Input
                        type="text"
                        name="email"
                        label="Email"
                        isRequired
                        value={userSistema!.email}
                        onChange={(e) => handleInputChange(e, setUserSistema, userSistema)}
                        startContent={<BiImage className="text-2xl" />}
                      />
                    <Input
                        type="text"
                        name="clave"
                        label="Clave"
                        isRequired
                        onChange={(e) => handleInputChange(e, setUserSistema, userSistema)}
                        startContent={<BiImage className="text-2xl" />}
                      />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={handleEditarUser}>
                      Guardar
                    </Button>
                  </ModalFooter>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )

}
