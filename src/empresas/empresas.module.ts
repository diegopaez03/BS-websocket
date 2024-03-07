import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasGateway } from './empresas.gateway';

@Module({
  providers: [EmpresasGateway, EmpresasService],
})
export class EmpresasModule {}
