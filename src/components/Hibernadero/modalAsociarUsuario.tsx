import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow } from "@nextui-org/react";
import { FaUsersCog } from "react-icons/fa";
import { CustomCheckbox } from "../users/CustomCheckbox";

export const ModalAsociarUsuario = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                color="primary"
                startContent={<FaUsersCog className="text-2xl" />}
                onPress={onOpen}
            >
                Asociar usuario
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Asociar Usuario al Invernadero</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-1 w-full">
                                    <ScrollShadow className="h-[350px]">
                                        <CustomCheckbox
                                            value="junior"
                                            user={{
                                                name: "Junior Garcia",
                                                avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
                                                username: "jrgarciadev",
                                                url: "https://twitter.com/jrgarciadev",
                                                role: "Software Developer",
                                                status: "Active",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="johndoe"
                                            user={{
                                                name: "John Doe",
                                                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                                                username: "johndoe",
                                                url: "#",
                                                role: "Product Designer",
                                                status: "Vacation",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="zoeylang"
                                            user={{
                                                name: "Zoey Lang",
                                                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                                                username: "zoeylang",
                                                url: "#",
                                                role: "Technical Writer",
                                                status: "Out of office",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="william"
                                            user={{
                                                name: "William Howard",
                                                avatar: "https://i.pravatar.cc/300?u=a048581f4e29026701d",
                                                username: "william",
                                                url: "#",
                                                role: "Sales Manager",
                                                status: "Active",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="junior"
                                            user={{
                                                name: "Junior Garcia",
                                                avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
                                                username: "jrgarciadev",
                                                url: "https://twitter.com/jrgarciadev",
                                                role: "Software Developer",
                                                status: "Active",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="johndoe"
                                            user={{
                                                name: "John Doe",
                                                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                                                username: "johndoe",
                                                url: "#",
                                                role: "Product Designer",
                                                status: "Vacation",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="zoeylang"
                                            user={{
                                                name: "Zoey Lang",
                                                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                                                username: "zoeylang",
                                                url: "#",
                                                role: "Technical Writer",
                                                status: "Out of office",
                                            }}
                                        />
                                        <CustomCheckbox
                                            value="william"
                                            user={{
                                                name: "William Howard",
                                                avatar: "https://i.pravatar.cc/300?u=a048581f4e29026701d",
                                                username: "william",
                                                url: "#",
                                                role: "Sales Manager",
                                                status: "Active",
                                            }}
                                        />
                                    </ScrollShadow>
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
