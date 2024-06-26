interface RegisterUser {
  "usuario": string,
  "nombres": string,
  "email": string,
  "clave": string
}

interface LoginUser {
  "usuario": string,
  "clave": string
}

export type {RegisterUser,LoginUser};