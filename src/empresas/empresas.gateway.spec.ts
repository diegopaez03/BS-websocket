import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasGateway } from './empresas.gateway';
import { EmpresasService } from './empresas.service';

describe('EmpresasGateway', () => {
  let gateway: EmpresasGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasGateway, EmpresasService],
    }).compile();

    gateway = module.get<EmpresasGateway>(EmpresasGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
