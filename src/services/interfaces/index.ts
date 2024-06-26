export interface HibernaderoInterface {
  id: string;
  imagen: string;
  ciudad: string;
  departamento: string;
  nombre: string;
  encargado: string;
  detalles: string;
  estado: string;
}

export interface SensorInterface {
  id?: string;
  idHibernadero: string;
  nombre: string;
  descripcion: string;
  config: boolean;
}

export interface UserInterface {
  id: string;
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

export interface UserHibernaderoInterface {
  id: string;
  idHibernadero: string;
  idUsuario: string;
}