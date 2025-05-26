import { ColorType, HistogramData } from "lightweight-charts";
import { ReactNode } from "react";

export interface ProtectedRoutesProps {
  children?: ReactNode;
  redirectTo?: string;
}

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
  usuarioEncargado?: string;
  descripcionTipoCultivo?: string;
  numero_Asociados?: string;
  sensorTuyaId?: string;
}

export interface ForgotPasswordInterface {
  message?: string;
  user?: string;
}

export interface IErrorFallbackProps {
  componentError: string;
  error: Error;
  resetErrorBoundary: () => void;
}

export interface SensorInterface {
  id?: string;
  idEstacion: string;
  nombre: string;
  descripcion: string;
  config: boolean;
  ubicacion?: string;
  idTuya?: string;
}

export interface UserInterface {
  id?: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

export interface RegisterUser {
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

export interface LoginUser {
  usuario: string;
  clave: string;
}

export interface UserEstacionInterface {
  id?: string;
  idEstacion: string;
  idUsuario: string;
  usuario?: string;
}

export interface FormularioInterface {
  id?: string;
  usuario: string;
  nombres: string;
  email: string;
  telefono: string;
  observacion: string;
  clave: string;
}

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
  username?: string;
  url?: string;
  eliminar?: boolean;
}

export interface CustomCheckboxProps {
  user: User;
  value: string;
  asociar: boolean;
}

export interface DropdownUserAsociados {
  user?: UserEstacionInterface;
  numeros_asociados: string;
}

export interface DatosSensor {
  idSensor: string;
  valor: string;
  fecha: string;
}

export interface SensorData {
  time: string;
  value: number; // Asegúrate de que value sea de tipo number
}

export interface ChartComponentProps {
  data: SensorData[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
}

export interface HistogramChartComponentProps {
  data: HistogramData[];
  chartOptions?: {
    layout?: {
      textColor?: string;
      background?: { type: ColorType; color: string };
    };
  };
  seriesOptions?: {
    color?: string;
  };
}
export interface TuyaSensorData {
  fecha(fecha: any): string;
  deviceName: string;
  id: string;
  nombre: string;
  ph: number | null;
  orp: number | null;
  ec: number | null;
  tds: number | null;
  salinidad: number | null;
  temperatura: number | null;
  timestamp: string;
}
