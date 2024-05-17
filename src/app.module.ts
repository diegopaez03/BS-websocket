import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { websocketGateway } from './webSocket.gateway';

@Module({
  imports: [ServeStaticModule.forRoot({ 
    rootPath: join(__dirname,'..','public'), 
    })],
  controllers: [],
  providers: [websocketGateway],
})
export class AppModule {}
