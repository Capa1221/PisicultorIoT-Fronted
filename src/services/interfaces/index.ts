export interface EstacionInterface {
  id?: string;
  imagen: string;
  ciudad: string;
  departamento: string;
  nombre: string;
  encargado: string;
  detalles: string;
  estado: string;
  idTipoCultivo: string;
  usuarioEncargado?:string;
  descripcionTipoCultivo?: string;
  numero_Asociados?: string;
}

export interface SensorInterface {
  id?: string;
  idHibernadero: string;
  nombre: string;
  descripcion: string;
  config: boolean;
}

export interface UserInterface {
  id?: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

export interface RegisterUser {
  usuario: string,
  nombres: string,
  email: string,
  clave: string
}

export interface LoginUser {
  usuario: string,
  clave: string
}

export interface UserEstacionInterface {
  id?: string;
  idEstacion: string;
  idUsuario: string;
}

export interface FormularioInterface {
  id?: string;
  usuario: string;
  nombres: string;
  email: string;
  telefono: string;
  observacion: string;
  clave: string;
};

export interface TipoCultivoInterface {
  id?: string;
  nombre: string;
  descripcion: string;
}

export interface ImageHandler {
  imagePreview: string | null;
  isImageValid: boolean;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface User {
  idEstacion: string;
  id: string;
  name: string;
  avatar: string;
  username: string;
  url: string;
}

export interface CustomCheckboxProps {
  user: User;
  value: string;
}

export interface DropdownUserAsociados {
  user?: UserEstacionInterface;
  numeros_asociados: string;
}