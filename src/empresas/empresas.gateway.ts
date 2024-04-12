import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { EmpresasService } from './empresas.service';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { EmpresaSocket } from '../common/constants';

@WebSocketGateway()
export class EmpresasGateway implements OnModuleInit {

  @WebSocketServer() 
  public server: Server;

  constructor(private readonly empresasService: EmpresasService) {}

  onModuleInit() {
    
    this.server.on('connection', (socket: Socket) => {

      console.log(`Se ha conectado  un cliente ${socket.id}`);

    } );

  }
  
  @SubscribeMessage(EmpresaSocket.EMIT)
  async empresa(@MessageBody() data: any) {    
    this.server.emit(EmpresaSocket.ACTUALIZACION, data);
  } 

}
