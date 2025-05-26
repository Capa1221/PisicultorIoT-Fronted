import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { eliminarUsuario } from '../../services/usuario-controller';
import { FaRegTrashAlt } from 'react-icons/fa';

export const ModalUserDelete =({id}:{id:string})=> {
  
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const token = sessionStorage.getItem("authToken");

  const handleDeleteUser = async () =>{
    try {
      if (token) {
        const response = await eliminarUsuario(id,token);
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
      <Button color="danger" startContent={<FaRegTrashAlt className="text-xl" />} variant="light" onPress={onOpen}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                  <ModalHeader className="flex flex-col text-center">Eliminar Usuario</ModalHeader>
                  <ModalBody>
                  <p className='text-medium '>
                    ¿Seguro que deseas el eliminar Usuario?
                  </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={handleDeleteUser}>
                      Eliminar
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
