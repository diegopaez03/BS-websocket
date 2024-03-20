import { join } from 'path';
import { Module } from '@nestjs/common';
import { EmpresasModule } from './empresas/empresas.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [EmpresasModule, ServeStaticModule.forRoot({ 
    rootPath: join(__dirname,'..','public'), 
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
