import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, SelectItem, Select, Input } from "@nextui-org/react";
import { BiImage, BiPencil, BiRename } from "react-icons/bi";
import { HiSelector } from "react-icons/hi";

export const ModalEditar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="text-warning" onPress={onOpen} variant="light" startContent={<BiPencil className="text-2xl" />}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <ModalContent>
                  <ModalHeader className="flex flex-col">Editar Hinernadero</ModalHeader>
                  <ModalBody>
                    <div className="flex">
                      <Input
                        type="file"
                        name="image"
                        label="Imagen del Cultivo"
                        isRequired
                        errorMessage="Por favor, seleccione un archivo de imagen válido (JPEG, PNG, GIF)."
                        startContent={<BiImage className="text-2xl" />}
                      />
                    </div>
                    <Input
                      label="Nombre del Cultivo"
                      name="nombre"
                      isRequired
                      placeholder="Hibernadero de yuca"
                      startContent={<BiRename className="text-2xl" />}
                    />
                    <Select
                      label="Tipo de Cultivo"
                      isRequired
                      placeholder="Seleccione el tipo de cultivo"
                      startContent={<HiSelector className="text-2xl text-gray-500"
                      />
                    }
                    >
                      <SelectItem key="Helllouuda">Helllouuda</SelectItem>
                      <SelectItem key="Helllouudad">Helllouudad</SelectItem>
                      <SelectItem key="Helllouudas">Helllouudas</SelectItem>
                      <SelectItem key="Helllouudaa">Helllouudaa</SelectItem>
                    </Select>
                    <Input
                      label="Ciudad"
                      name="ciudad"
                      placeholder="Pamplona"
                      isRequired
                      width="100%"
                    />
                    <Input
                      label="Departamento"
                      name="departamento"
                      placeholder="Norte de Santander"
                      isRequired
                      width="100%"
                    />
                    <Textarea
                      label="Detalles"
                      placeholder={"loremdasdasdsadsadasdsadasdsa"}
                      width="100%"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Guardar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
