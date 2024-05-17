export const TITULO_EMPRESAS = "EMPRESAS"
export const TITULO_PERMISOS = "PERMISOS"
export const TITULO_CONTRATOS = "CONTRATOS"
export const TITULO_SISTEMAS = "SISTEMAS"
export const TITULO_USUARIOS = "USUARIOS"
export const TITULO_LOGIN = "LOGIN"
export const TITULO_SESIONES = "SESIONES"

export enum EmpresaSocket {
  ACTUALIZACION = TITULO_EMPRESAS,
  EMIT = TITULO_EMPRESAS + '_EMISION',
  }
  
export enum PermisoSocket {
  ACTUALIZACION = TITULO_PERMISOS,
  EMIT = TITULO_PERMISOS + '_EMISION',
  }

export enum ContratosSocket {
  ACTUALIZACION = TITULO_CONTRATOS,
  EMIT = TITULO_CONTRATOS + '_EMISION',
  }  

export enum SistemasSocket {
  ACTUALIZACION = TITULO_SISTEMAS,
  EMIT = TITULO_SISTEMAS + '_EMISION',
  }    

export enum UsuariosSocket {
  ACTUALIZACION = TITULO_USUARIOS,
  EMIT = TITULO_USUARIOS + '_EMISION',
  }   

export enum LoginSocket {
  ACTUALIZACION = TITULO_LOGIN,
  EMIT = TITULO_LOGIN + '_EMISION',
  }    

export enum SesionesSocket {
  ACTUALIZACION = TITULO_SESIONES,
  EMIT = TITULO_SESIONES + '_EMISION',
  }    