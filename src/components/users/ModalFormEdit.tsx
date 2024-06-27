import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { handleInputChange } from '../../utils/utilsHandle';
import { BiUser, BiEnvelope, BiPhone, BiNote, BiLock, BiEdit } from 'react-icons/bi';
import { FormularioInterface } from '../../services/interfaces';
import { actualizarFormulario, obtenerFormularioPorId } from '../../services/Formulario-Sesion';

export const ModalFormEdit = ({ id }: { id: string }) => {

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [formularioUser, setformularioUser] = useState<FormularioInterface>({
    id: "",
    usuario: "",
    nombres: "",
    email: "",
    telefono: "",
    observacion: "",
    estado: "",
    clave: "",
  }
  );
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await obtenerFormularioPorId(id, token);
          if (response.status == 200) {
            setformularioUser(response.data);
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

  const handleEditarUser = async () => {
    try {
      if (token) {
        const response = await actualizarFormulario(formularioUser, token);
        console.log(response);
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
                <ModalHeader className="flex flex-col text-center">Editar formularioUser</ModalHeader>
                <ModalBody className="">
                <div className='flex space-x-2'>
                  <Input
                    type="text"
                    name="usuario"
                    label="Nombre de Usuario"
                    isRequired
                    value={formularioUser.usuario}
                    onChange={(e) => handleInputChange(e, setformularioUser, formularioUser)}
                    startContent={<BiUser className="text-2xl" />}
                  />
                  <Input
                    type="text"
                    name="nombres"
                    label="Nombres Completos"
                    isRequired
                    value={formularioUser.nombres}
                    onChange={(e) => handleInputChange(e, setformularioUser, formularioUser)}
                    startContent={<BiUser className="text-2xl" />}
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  label="Correo Electrónico"
                  isRequired
                  value={formularioUser.email}
                  onChange={(e) => handleInputChange(e, setformularioUser, formularioUser)}
                  startContent={<BiEnvelope className="text-2xl" />}
                />
                <Input
                  type="text"
                  name="telefono"
                  label="Número de Teléfono"
                  isRequired
                  value={formularioUser.telefono}
                  onChange={(e) => handleInputChange(e, setformularioUser, formularioUser)}
                  startContent={<BiPhone className="text-2xl" />}
                />
                <Input
                  type="text"
                  name="observacion"
                  label="Observaciones"
                  isRequired
                  value={formularioUser.observacion}
                  onChange={(e) => handleInputChange(e, setformularioUser, formularioUser)}
                  startContent={<BiNote className="text-2xl" />}
                />
                <Input
                  type="password"
                  name="clave"
                  label="Clave"
                  isRequired
                  value={formularioUser.clave}
                  onChange={(e) => handleInputChange(e, setformularioUser, formularioUser)}
                  startContent={<BiLock className="text-2xl" />}
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
