import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, useDisclosure, Textarea, Input, Select, SelectItem
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiImage, BiPencil, BiRename } from "react-icons/bi";
import { FaCity, FaMapPin } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";

import { EstacionInterface } from "../../services/interfaces";
import { actualizarEstacion, buscarEstacionPorId } from "../../services/Estaciones";
import { handleInputChange, handleSelectChange, useImageHandler } from "../../utils/utilsHandle";
import { SelectTipoEstacion } from "./SelectTipoEstacion";

export const ModalEditar = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [estacion, setEstacion] = useState<EstacionInterface>();
  const token = sessionStorage.getItem("authToken")!;
  const { imagePreview, isImageValid, handleImageChange } = useImageHandler();

  useEffect(() => {
    const fetchEstacion = async () => {
      try {
        sessionStorage.removeItem("imageBase64");
        if (!token) return console.error("Token inválido");

        const response = await buscarEstacionPorId(id, token);
        if (response.status === 200) {
          setEstacion(response.data);
        } else {
          console.error("Error al obtener la estación");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchEstacion();
  }, [id, token]);

  const handleEditarEstacion = async () => {
    if (!estacion) return console.error("Estación no definida");

    try {
      const tipoCultivo = sessionStorage.getItem("tipoId");
      const imageEstacion = sessionStorage.getItem("imageBase64");

      if (tipoCultivo && tipoCultivo.length !== 4) {
        estacion.idTipoCultivo = tipoCultivo;
      }

      if (imageEstacion && imageEstacion.length !== 4) {
        estacion.imagen = imageEstacion;
      }

      const response = await actualizarEstacion(estacion, token);
      if (response.status === 200) {
        onClose();
        window.location.reload();
      } else {
        alert("Error al tratar de actualizar la estación");
      }
    } catch (error) {
      console.error("Error al actualizar la estación", error);
    }
  };

  return (
    <>
      <Button
        className="text-warning"
        onPress={onOpen}
        variant="light"
        startContent={<BiPencil className="text-2xl" />}
      />
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader className="flex flex-col text-center">
            Editar Estación
          </ModalHeader>
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
              </div>
              {!isImageValid && (
                <div className="flex items-center mt-1">
                  <BiImage className="text-2xl text-red-600" />
                  <p className="text-sm text-red-600 ml-2">
                    Por favor, seleccione un archivo de imagen válido (JPEG, PNG, GIF)
                  </p>
                </div>
              )}
              {imagePreview && (
                <div className="flex justify-end mt-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="rounded-lg"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>

            <Input
              label="Nombre de la Estación"
              name="nombre"
              isRequired
              value={estacion?.nombre || ""}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
              startContent={<BiRename className="text-2xl" />}
            />

            <SelectTipoEstacion />

            <div className="flex space-x-2">
              <Input
                label="Ciudad"
                name="ciudad"
                isRequired
                value={estacion?.ciudad || ""}
                onChange={(e) => handleInputChange(e, setEstacion, estacion)}
                fullWidth
                startContent={<FaCity className="text-2xl" />}
              />
              <Input
                label="Departamento"
                name="departamento"
                isRequired
                value={estacion?.departamento || ""}
                onChange={(e) => handleInputChange(e, setEstacion, estacion)}
                fullWidth
                startContent={<FaMapPin className="text-2xl" />}
              />
            </div>

            <Select
              isRequired
              label="Estado"
              placeholder="Seleccione el estado de la estación"
              defaultSelectedKeys={estacion?.estado}
              startContent={<GrConfigure />}
              onChange={(e) => {
                const selectedValue = e.target.value;
                handleSelectChange("estado", selectedValue, setEstacion, estacion);
              }}
            >
              <SelectItem key="1">Activo</SelectItem>
              <SelectItem key="0">Inactivo</SelectItem>
            </Select>

            <Textarea
              label="Detalles"
              name="detalles"
              value={estacion?.detalles || ""}
              onChange={(e) => handleInputChange(e, setEstacion, estacion)}
              fullWidth
              startContent={<FaCity className="text-2xl" />}
            />
          </ModalBody>

          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
            <Button color="primary" onPress={handleEditarEstacion}>
              Actualizar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
