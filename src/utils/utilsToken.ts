import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  role: string;
  token: string;
  sub: string;
  idUsuario: string;
  iat: number;
  exp: number;
}

export const decodeToken = (token: string): DecodedToken => {
  return jwtDecode<DecodedToken>(token);
};