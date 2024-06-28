import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiImage, BiPencil, BiRename } from "react-icons/bi";
import { EstacionInterface } from "../../services/interfaces";
import { actualizarEstacion, buscarEstacionPorId } from "../../services/Estaciones";
import { handleInputChange, useImageHandler } from "../../utils/utilsHandle";
import { SelectTipoEstacion } from "./SelectTipoEstacion";
import { FaCity, FaMapPin } from "react-icons/fa";

export const ModalEditar = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [estacion, setEstacion] = useState<EstacionInterface>();
  const token = sessionStorage.getItem("authToken")!;
  const { imagePreview, isImageValid, handleImageChange } = useImageHandler();

  useEffect(() => {
    const fetchEstacion = async () => {
      try {
        if (token) {
          const response = await buscarEstacionPorId(id, token);
          if (response.status == 200) {
            setEstacion(response.data);
          } else {
            console.error("Error fetchEstacion");
          }
        } else {
          console.error("Error Token");
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
    fetchEstacion();
  }, [token]);

  const handleEditarEstacion = async () => {
    if (!estacion) {
      console.error("Estación no definida");
      return;
    }
    try {
      const tipoCultivo = sessionStorage.getItem("tipoId");
      const imageEstacion = sessionStorage.getItem("imageBase64")!;
      if (tipoCultivo != null && imageEstacion != null) {
        estacion.idTipoCultivo = tipoCultivo;
        estacion.imagen = imageEstacion;
        estacion.estado = "1";
        const response = await actualizarEstacion(estacion, token);
        if (response.status === 200) {
          onClose();
          window.location.reload();
        }
      } else {
        alert("Error al tratar de crear la estación");
      }
    } catch (error) {
      console.error("Error al crear la estación", error);
    }
  };

  return (
    <>
      <Button className="text-warning" onPress={onOpen} variant="light" startContent={<BiPencil className="text-2xl" />}></Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader className="flex flex-col text-center">Editar Estacion</ModalHeader>
          <ModalBody>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-500">Imagen</span>
              <div className="flex items-center space-x-1">
                <input
                  type="file"
                  name="image"
                  className={`border ${!isImageValid ? 'border-red-600' : 'border-gray-300'} px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500`}
                  onChange={handleImageChange}
                />
                {!isImageValid && (
                  <div className="flex items-center">
                    <BiImage className="text-2xl text-red-600" />
                    <p className="text-sm text-red-600 ml-2">Por favor, seleccione un archivo de imagen válido (JPEG, PNG, GIF)</p>
                  </div>
                )}
                {imagePreview && (
                  <div className="flex place-content-end">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="rounded-lg"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                )}
              </div>
            </div>
            <Input
              label="Nombre del Cultivo"
              name="nombre"
              isRequired
              value={estacion?.nombre}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
              startContent={<BiRename className="text-2xl" />}
            />
            <SelectTipoEstacion />
            <div className="flex space-x-2">
              <Input
                label="Ciudad"
                name="ciudad"
                isRequired
                value={estacion?.ciudad}
                onChange={(e) => handleInputChange(e, setEstacion, estacion)}
                width="100%"
                startContent={<FaCity className="text-2xl" />}
              />
              <Input
                label="Departamento"
                name="departamento"
                value={estacion?.departamento}
                onChange={(e) => handleInputChange(e, setEstacion, estacion)}
                isRequired
                width="100%"
                startContent={<FaMapPin className="text-2xl" />}
              />
            </div>
            <Textarea
              label="Detalles"
              name="detalles"
              value={estacion?.detalles}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
              width="100%"
              startContent={<FaCity className="text-2xl" />}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
            <Button color="primary" onPress={handleEditarEstacion}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
