import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { GrAddCircle } from "react-icons/gr";

export const ModalAgregarSensor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<GrAddCircle className="text-xl"/>}>Agregar Sensor</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar Sensor</ModalHeader>
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
  );
}
