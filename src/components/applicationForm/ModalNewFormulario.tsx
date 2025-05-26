import { ChangeEvent, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import { BiUser, BiEnvelope, BiPhone, BiNote, BiLock } from 'react-icons/bi';
import { FormularioInterface } from '../../services/interfaces';
import { handleInputChange, handleTextareaChange } from '../../utils/utilsHandle';
import { crearFormulario } from '../../services/Formulario-Sesion';
import { GrFormEdit } from 'react-icons/gr';

export const ModalNewFormulario = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [loading,setLoading] = useState<boolean>(false);
  const [formulario, setFormulario] = useState<FormularioInterface>({
    usuario: "",
    nombres: "",
    email: "",
    telefono: "",
    observacion: "",
    clave: ""
  });

  const handleGuardarFormulario = async () => {
    try {
      setLoading(true);
      const response = await crearFormulario(formulario);
      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        confirm("Su solicitud ha sido registrada.")
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
        Realizar Formulario
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col text-center">Formulario de Solicitud</ModalHeader>
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
                    label="Nombre"
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
                <Textarea
                  name="observacion"
                  label="¿Por qué deseas participar?"
                  isRequired
                  value={formulario.observacion}
                  onValueChange={(value: string) => handleTextareaChange(value, setFormulario)}
                  startContent={<BiNote className="text-2xl" />}
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
                <Button color="primary" onPress={handleGuardarFormulario} isLoading={loading}>
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
