import { CommentSection, HeaderDashboard } from "../../../components";
import { Input, Button, Card } from "@nextui-org/react";
import { UserInterface } from "../../../services/interfaces";
import { useEffect, useState } from "react";
import { actualizarUsuario, buscarUsuarioPorId } from "../../../services/usuario-controller";
import { decodeToken } from "../../../utils/utilsToken";
import { handleInputChange } from "../../../utils/utilsHandle";

export const AjustePerfil = () => {
    const [user, setUser] = useState<UserInterface | null>(null);
    const token = sessionStorage.getItem("authToken");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (token) {
                    const decodedToken = decodeToken(token);
                    const response = await buscarUsuarioPorId(decodedToken.idUsuario, token);
                    if (response.status === 200) {
                        setUser(response.data);
                    } else {
                        console.error("error fetchUser");
                    }
                } else {
                    console.error("error token");
                }
            } catch (error) {
                console.error("error:", error);
            }
        };
        fetchUser();
    }, [token]);

    const ActualizarUsuario = async () => {
        try {
            if (token && user) {
                const response = await actualizarUsuario(user, token);
                if (response.status === 200) {
                    alert("Su usuario ha sido actualizado con éxito.");
                } else {
                    alert("Su usuario no ha sido actualizado.");
                }
                window.location.reload();
            } else {
                console.error("error token");
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <>
            <HeaderDashboard mensaje={"Ajuste de Perfil"} />
            <CommentSection
                mensaje="Bienvenido a la sección de ajustes de su perfil. Aquí puede actualizar su información personal, cambiar su contraseña y gestionar sus preferencias. Asegúrese de mantener su perfil actualizado para una mejor experiencia en la plataforma."
            />
            <div className="p-4 bg-gray-100 sm:p-6">
                <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
                    <Card className="p-4 mb-4 sm:p-6 sm:mb-6">
                        <h4 className="mb-2 sm:mb-4">Información Personal</h4>
                        <div className="space-y-2 sm:space-y-4">
                            <Input 
                                fullWidth 
                                variant="bordered" 
                                placeholder="Usuario" 
                                value={user?.usuario ?? ""} 
                                name="usuario" 
                                onChange={(e) => handleInputChange(e, setUser, user)} 
                            />
                            <Input 
                                fullWidth 
                                variant="bordered" 
                                placeholder="Nombre" 
                                value={user?.nombres ?? ""} 
                                name="nombres" 
                                onChange={(e) => handleInputChange(e, setUser, user)} 
                            />
                            <Input 
                                fullWidth 
                                variant="bordered" 
                                placeholder="Correo Electrónico" 
                                type="email" 
                                value={user?.email ?? ""} 
                                name="email" 
                                onChange={(e) => handleInputChange(e, setUser, user)} 
                            />
                            <Button 
                                className="mt-2 sm:mt-4" 
                                variant="shadow" 
                                onClick={ActualizarUsuario}
                                color="primary"
                            >
                                Actualizar Información
                            </Button>
                        </div>
                    </Card>
                    <Card className="p-4 mb-4 sm:p-6 sm:mb-6">
                        <h4 className="mb-2 sm:mb-4">Cambiar Contraseña</h4>
                        <div className="space-y-2 sm:space-y-4">
                            <Input 
                                fullWidth 
                                variant="bordered" 
                                placeholder="Nueva Contraseña" 
                                type="password" 
                                value={""} 
                                name="clave" 
                                onChange={(e) => handleInputChange(e, setUser, user)} 
                            />
                            <Button 
                                className="mt-2 sm:mt-4" 
                                variant="shadow" 
                                onClick={ActualizarUsuario}
                                color="primary"
                            >
                                Cambiar Contraseña
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};
