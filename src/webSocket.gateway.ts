import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { ContratosSocket, EmpresaSocket, LoginSocket, PermisoSocket, SesionesSocket, SistemasSocket, UsuariosSocket } from './common/constants';

@WebSocketGateway()
export class websocketGateway implements OnModuleInit {

  @WebSocketServer() 
  public server: Server;

  constructor() {}

  onModuleInit() {
    
    this.server.on('connection', (socket: Socket) => {

      console.log(`Se ha conectado  un cliente ${socket.id}`);

    } );

  }
  
  @SubscribeMessage(EmpresaSocket.EMIT)
  async empresa(@MessageBody() data: any) {    
    this.server.emit(EmpresaSocket.ACTUALIZACION, data);
  } 

  @SubscribeMessage(PermisoSocket.EMIT)
  async permiso(@MessageBody() data: any) {    
    this.server.emit(PermisoSocket.ACTUALIZACION, data);
  } 

  @SubscribeMessage(ContratosSocket.EMIT)
  async contrato(@MessageBody() data: any) {    
    this.server.emit(ContratosSocket.ACTUALIZACION, data);
  } 

  @SubscribeMessage(SistemasSocket.EMIT)
  async sistema(@MessageBody() data: any) {    
    this.server.emit(SistemasSocket.ACTUALIZACION, data);
  } 

  @SubscribeMessage(UsuariosSocket.EMIT)
  async usuario(@MessageBody() data: any) {    
    this.server.emit(UsuariosSocket.ACTUALIZACION, data);
  } 

  @SubscribeMessage(LoginSocket.EMIT)
  async login(@MessageBody() data: any) {    
    this.server.emit(LoginSocket.ACTUALIZACION, data);
  } 

  @SubscribeMessage(SesionesSocket.EMIT)
  async sesion(@MessageBody() data: any) {    
    this.server.emit(SesionesSocket.ACTUALIZACION, data);
  } 

}
