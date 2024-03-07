import { Module } from '@nestjs/common';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [EmpresasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
