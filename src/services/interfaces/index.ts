/* --------------------------------------------------------------------------
 * Global application interfaces & utility types
 * --------------------------------------------------------------------------
 *  ▸ This file centralises *all* simple TypeScript types used across the
 *    React‑Vite frontend so they can be imported from a single place:
 *       import { Station, ApiResponse } from "@/services/interfaces";
 *
 *  ▸ The original file has been re‑structured to:
 *      1. group related types together,
 *      2. introduce small helper primitives (UUID, ISODate, ApiResponse), and
 *      3. replace loose string literals with discriminated unions / enums.
 *
 *  ▸ No runtime behaviour has changed — only stronger typing & docs.
 * ------------------------------------------------------------------------ */

import { ReactNode } from "react";
import type { ColorType, HistogramData } from "lightweight-charts";

/* ------------------------------------------------------------------
 * Shared primitives
 * ---------------------------------------------------------------- */

/** 128‑bit identifier coming from backend (database GUID / ULID / UUIDv4) */
export type UUID = string;

/** RFC‑3339 / ISO‑8601 date‑time string */
export type ISODate = string;

/* ------------------------------------------------------------------
 * Generic API helpers
 * ---------------------------------------------------------------- */

/** Standard shape for every response coming from the backend */
export interface ApiResponse<T = unknown> {
  success: boolean;
  timestamp: ISODate;
  data: T;
  /** Optional detail message for non‑200 or edge cases */
  message?: string;
}

/* ------------------------------------------------------------------
 * Routing / Auth
 * ---------------------------------------------------------------- */

export interface ProtectedRoutesProps {
  children: ReactNode;
  /** Route where the user will be redirected if not authorised */
  redirectTo?: string;
}

/* ------------------------------------------------------------------
 * User & Auth models
 * ---------------------------------------------------------------- */

export interface UserLoginDTO {
  usuario: string;
  clave: string;
}

export interface UserRegisterDTO extends UserLoginDTO {
  nombres: string;
  email: string;
}

export interface UserEntity {
  id: UUID;
  usuario: string;
  nombres: string;
  email: string;
  /** Hash stored in DB – never expose on client side */
  clave?: string;
}

export interface ForgotPasswordPayload {
  user: string; // email or username
  message?: string;
}

/* ------------------------------------------------------------------
 * Station (Estación) domain
 * ---------------------------------------------------------------- */

export enum StationStatus {
  Activa = "activa",
  Inactiva = "inactiva",
  Mantenimiento = "mantenimiento",
}

export interface Station {
  id: UUID;
  imagen: string;
  ciudad: string;
  departamento: string;
  nombre: string;
  encargado: string;
  detalles: string;
  estado: StationStatus;
  idTipoCultivo: UUID;
  /** Foreign keys (optional) */
  usuarioEncargado?: UUID;
  descripcionTipoCultivo?: string;
  numeroAsociados?: number;
  /** Identificador del dispositivo Tuya asociado (si existe) */
  sensorTuyaId?: string;
}

/* ------------------------------------------------------------------
 * Sensor domain
 * ---------------------------------------------------------------- */

export interface Sensor {
  id: UUID;
  idEstacion: UUID;
  nombre: string;
  descripcion: string;
  /** true ⇒ configurado correctamente */
  config: boolean;
  ubicacion?: string;
  idTuya?: string;
}

export interface SensorReading {
  idSensor: UUID;
  valor: string | number;
  fecha: ISODate;
}

/* ------------------------------------------------------------------
 * Tuya specific DTOs
 * ---------------------------------------------------------------- */

export interface SavedRecord {
  id: UUID;
  nombre: string;
  temperatura: number;
  timestamp: ISODate;
}

export interface SavedResponseBody {
  saved_record: SavedRecord;
  method: "hybrid_capture" | "direct_api" | string;
  capture_analysis: unknown;
}

export type SavedResponse = ApiResponse<SavedResponseBody>;

export interface TuyaSensorData {
  id: UUID;
  nombre: string;
  temperatura: number | null;
  timestamp: ISODate;
}

export interface LatestResponseBody {
  latest_records: TuyaSensorData[];
  total_records_count?: number;
  showing_latest?: number;
}

export type LatestResponse = ApiResponse<LatestResponseBody>;

/* ------------------------------------------------------------------
 * User‑Station association helpers
 * ---------------------------------------------------------------- */

export interface UserStation {
  id: UUID;
  idEstacion: UUID;
  idUsuario: UUID;
  usuario?: string;
}

/* ------------------------------------------------------------------
 * Cultivo (crop type)
 * ---------------------------------------------------------------- */

export interface CropType {
  id: UUID;
  nombre: string;
  descripcion: string;
}

/* ------------------------------------------------------------------
 * Misc UI types
 * ---------------------------------------------------------------- */

export interface ImageHandler {
  imagePreview: string | null;
  isImageValid: boolean;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AppUserCard {
  id: UUID;
  idEstacion: UUID;
  nombre: string;
  avatar: string;
  username?: string;
  url?: string;
  eliminar?: boolean;
}

export interface CustomCheckboxProps {
  user: AppUserCard;
  value: string;
  asociar: boolean;
}

export interface DropdownUserAsociados {
  user?: UserStation;
  numeros_asociados: string;
}

/* ------------------------------------------------------------------
 * Chart related
 * ---------------------------------------------------------------- */

export interface LineChartPoint {
  time: string; // ↳ keep string to allow ISO or epoch – converted inside component
  value: number;
}

export interface ChartColors {
  backgroundColor?: string;
  lineColor?: string;
  textColor?: string;
  areaTopColor?: string;
  areaBottomColor?: string;
}

export interface ChartComponentProps {
  data: LineChartPoint[];
  colors?: ChartColors;
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

/* ------------------------------------------------------------------
 * Fallback / Error boundary helpers
 * ---------------------------------------------------------------- */

export interface ErrorFallbackProps {
  componentError: string;
  error: Error;
  resetErrorBoundary: () => void;
}

/* ------------------------------------------------------------------
 * Forms (legacy names kept for backwards compatibility)
 * ---------------------------------------------------------------- */

export interface Formulario {
  id?: UUID;
  usuario: string;
  nombres: string;
  email: string;
  telefono: string;
  observacion: string;
  clave: string;
}

/* ------------------------------------------------------------------
 * Module re‑exports (handy when splitting this file later)
 * ---------------------------------------------------------------- */

export type {
  Station as EstacionInterface,
  CropType as TipoCultivoInterface,
  Sensor as SensorInterface,
  SensorReading as DatosSensor,
  TuyaSensorData,
};