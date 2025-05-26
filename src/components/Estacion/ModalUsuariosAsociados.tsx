import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow } from "@nextui-org/react";
import { CustomCheckbox } from "../users/CustomCheckbox";
import { useEffect, useState } from "react";
import { UserEstacionInterface } from "../../services/interfaces";
import { buscarPorEstacion } from "../../services/Usuario-Estacion-controller";
import { BiUser } from "react-icons/bi";

export const ModalUsuariosAsociados = ({ idEstacion, numero_Asociados }: { idEstacion: string; numero_Asociados: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [users, setUsers] = useState<UserEstacionInterface[]>([]);
    const onClose = sessionStorage.getItem("setOnCloseAsociarUsuario");
    const token = sessionStorage.getItem("authToken");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (token) {
                    const response = await buscarPorEstacion(idEstacion, token);
                    if (response.status == 200) {
                        console.log("data", response.data);
                        setUsers(response.data);
                    } else {
                        console.error("error fetchUsers")
                    }
                } else {
                    console.error("error token");
                }
            } catch (error) {
                console.error("error", error);
            }
        };
        fetchUsers();
    }, [token, onClose]);

    return (
        <>
            <Button
                color="primary"
                startContent={<BiUser className="text-xl" />}
                onPress={onOpen}
                variant="light"
            >
                {numero_Asociados}
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Usuarios Asociados a la Estacion</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-1 w-full" key={users.length}>
                                    <ScrollShadow className="h-auto">
                                        {users.map((user) => (
                                            <CustomCheckbox
                                                value={user.id!}
                                                key={user.id!}
                                                user={{
                                                    idEstacion: idEstacion,
                                                    id: user.id!,
                                                    name: user.usuario!,
                                                    avatar: `https://api.dicebear.com/5.x/thumbs/svg?seed=${user.usuario}`,
                                                    eliminar: true
                                                }} asociar={true}                                            />
                                        ))}
                                    </ScrollShadow>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
