import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ScrollShadow } from "@nextui-org/react";
import { RiSensorLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const ModalSensoresUsuarioHibernadero = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<RiSensorLine />}>Sensores Asociado</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm" placement="center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader>Sensores Asociados al Cultivo</ModalHeader>
              <ModalBody>
              <ScrollShadow className="w-full h-[350px] space-y-6">
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                  <Button variant="light" className="w-full" startContent={<RiSensorLine className="text-xl"/>} onClick={()=>{navigate("/dashboard/Sensor/Grafica")}}>Sensor de agua</Button>
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
