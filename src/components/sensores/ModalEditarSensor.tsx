import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { TiEdit } from "react-icons/ti";


export const ModalEditarSensor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="warning" variant="bordered" startContent={<TiEdit className="text-2xl" />} onClick={onOpen}></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar Sensor</ModalHeader>
              <ModalBody>
                <Input
                  label="Nombre"
                  name="nombre"
                  width="100%"
                />
                <Textarea
                  label="Descripci�n"
                  name="descripcion"
                  width="100%"
                />
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Autocomplete
                    label="Hibernadero"
                    placeholder="Selecciona un hibernadero"
                    className="max-full">
                    <AutocompleteItem key={"1"}>
                      cultivo
                    </AutocompleteItem>
                    <AutocompleteItem key={"2"}>
                      invernadero
                    </AutocompleteItem>
                    <AutocompleteItem key={"3"}>
                      jajajajjaj
                    </AutocompleteItem>
                  </Autocomplete>
                </div>
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
  )
}
