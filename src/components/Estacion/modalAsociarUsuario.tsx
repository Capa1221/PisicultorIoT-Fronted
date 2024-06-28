import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow } from "@nextui-org/react";
import { FaUsersCog } from "react-icons/fa";
import { CustomCheckbox } from "../users/CustomCheckbox";
import { useEffect, useState } from "react";
import { UserInterface } from "../../services/interfaces";
import { buscarUsuariosSinEstacion } from "../../services/Usuario-Estacion-controller";

export const ModalAsociarEstacion = ({ idEstacion }: { idEstacion: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [users, setUsers] = useState<UserInterface[]>([]);
    const token = sessionStorage.getItem("authToken");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (token) {
                    const response = await buscarUsuariosSinEstacion(idEstacion, token);
                    if (response.status == 200) {
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
    }, [token]);

    return (
        <>
            <Button
                color="primary"
                startContent={<FaUsersCog className="text-2xl" />}
                onPress={onOpen}
            >
                Asociar usuario
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Asociar Usuario Estacion</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-1 w-full">
                                    {users.map((user) => (
                                        <ScrollShadow className="h-auto">
                                            <CustomCheckbox
                                                value={user.id!}
                                                key={user.id!}
                                                user={{
                                                    name: user.nombres,
                                                    avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
                                                    username: user.email,
                                                    url: user.email,
                                                    role: "User",
                                                    status: "Activo",
                                                }}
                                            />
                                        </ScrollShadow>
                                    ))}
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
