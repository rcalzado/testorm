import { Test, TestingModule } from '@nestjs/testing';
import { PessoasController } from './pessoas.controller';

describe('Pessoas Controller', () => {
  let controller: PessoasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoasController],
    }).compile();

    controller = module.get<PessoasController>(PessoasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
