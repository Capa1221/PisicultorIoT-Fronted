import { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { BiUser, BiEnvelope, BiPhone, BiNote, BiCheckCircle, BiLock } from 'react-icons/bi';
import { FormularioInterface } from '../../services/interfaces';
import { handleInputChange } from '../../utils/utilsHandle';
import { crearFormulario } from '../../services/Formulario-Sesion';
import { GrFormEdit } from 'react-icons/gr';

export const ModalNewFormulario = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [formulario, setFormulario] = useState<FormularioInterface>({
    id: "",
    usuario: "",
    nombres: "",
    email: "",
    telefono: "",
    observacion: "",
    estado: "",
    clave: ""
  });

  const handleGuardarFormulario = async () => {
    try {
      const response = await crearFormulario(formulario);
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
      <Button
        color="primary"
        startContent={<GrFormEdit className="text-xl" />}
        onPress={onOpen}
        className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
      >
        Editar Formulario
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col text-center">Editar Formulario de Solicitud</ModalHeader>
              <ModalBody className="">
                <div className='flex space-x-2'>
                  <Input
                    type="text"
                    name="usuario"
                    label="Nombre de Usuario"
                    isRequired
                    value={formulario.usuario}
                    onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                    startContent={<BiUser className="text-2xl" />}
                  />
                  <Input
                    type="text"
                    name="nombres"
                    label="Nombres Completos"
                    isRequired
                    value={formulario.nombres}
                    onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                    startContent={<BiUser className="text-2xl" />}
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  label="Correo Electrónico"
                  isRequired
                  value={formulario.email}
                  onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                  startContent={<BiEnvelope className="text-2xl" />}
                />
                <Input
                  type="text"
                  name="telefono"
                  label="Número de Teléfono"
                  isRequired
                  value={formulario.telefono}
                  onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                  startContent={<BiPhone className="text-2xl" />}
                />
                <Input
                  type="text"
                  name="observacion"
                  label="Observaciones"
                  isRequired
                  value={formulario.observacion}
                  onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                  startContent={<BiNote className="text-2xl" />}
                />
                <Input
                  type="text"
                  name="estado"
                  label="Estado"
                  isRequired
                  value={formulario.estado}
                  onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                  startContent={<BiCheckCircle className="text-2xl" />}
                />
                <Input
                  type="password"
                  name="clave"
                  label="Clave"
                  isRequired
                  value={formulario.clave}
                  onChange={(e) => handleInputChange(e, setFormulario, formulario)}
                  startContent={<BiLock className="text-2xl" />}
                />
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleGuardarFormulario}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
