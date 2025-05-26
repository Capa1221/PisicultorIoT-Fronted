import { ColorType, HistogramData } from "lightweight-charts";
import { ReactNode } from "react";

// Rutas protegidas
export interface ProtectedRoutesProps {
  children?: ReactNode;
  redirectTo?: string;
}

// Estación
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

// Recuperación de contraseña
export interface ForgotPasswordInterface {
  message?: string;
  user?: string;
}

// Propiedades de fallback de error
export interface IErrorFallbackProps {
  componentError: string;
  error: Error;
  resetErrorBoundary: () => void;
}

// Sensor
export interface SensorInterface {
  id?: string;
  idEstacion: string;
  nombre: string;
  descripcion: string;
  config: boolean;
  ubicacion?: string;
  idTuya?: string;
}

// Usuario
export interface UserInterface {
  id?: string;
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

// Registro de usuario
export interface RegisterUser {
  usuario: string;
  nombres: string;
  email: string;
  clave: string;
}

// Inicio de sesión
export interface LoginUser {
  usuario: string;
  clave: string;
}

// Usuario asociado a estación
export interface UserEstacionInterface {
  id?: string;
  idEstacion: string;
  idUsuario: string;
  usuario?: string;
}

// Formulario
export interface FormularioInterface {
  id?: string;
  usuario: string;
  nombres: string;
  email: string;
  telefono: string;
  observacion: string;
  clave: string;
}

// Tipo de cultivo
export interface TipoCultivoInterface {
  id?: string;
  nombre: string;
  descripcion: string;
}

// Manejador de imágenes
export interface ImageHandler {
  imagePreview: string | null;
  isImageValid: boolean;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Usuario (genérico)
export interface User {
  idEstacion: string;
  id: string;
  name: string;
  avatar: string;
  username?: string;
  url?: string;
  eliminar?: boolean;
}

// Propiedades de casilla de verificación personalizada
export interface CustomCheckboxProps {
  user: User;
  value: string;
  asociar: boolean;
}

// Dropdown de usuarios asociados
export interface DropdownUserAsociados {
  user?: UserEstacionInterface;
  numeros_asociados: string;
}

// Datos del sensor
export interface DatosSensor {
  idSensor: string;
  valor: string;
  fecha: string;
}

// Datos para gráficos
export interface SensorData {
  time: string;
  value: number;
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

// Datos del sensor Tuya (corregido)
export interface TuyaSensorData {
  id: string;
  nombre: string;
  deviceName?: string; // Opcional, si tu backend lo devuelve
  ph: number | null;
  orp: number | null;
  ec: number | null;
  tds: number | null;
  salinidad: number | null;
  temperatura: number | null;
  timestamp: string;
  fecha?: string; // Opcional, si tu backend lo devuelve en lugar de timestamp
}

// Análisis de tendencias
export interface TrendsAnalysis {
  temperature_trend?: string;
  ph_trend?: string;
  avg_temperature?: number;
  avg_ph?: number;
}

// Respuesta del endpoint /latest
export interface LatestResponse {
  latest_records: TuyaSensorData[];
  trends_analysis: TrendsAnalysis;
  total_records_count: number;
  showing_latest: number;
}