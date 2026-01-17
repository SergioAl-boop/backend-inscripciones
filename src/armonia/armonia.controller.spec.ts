import { Test, TestingModule } from '@nestjs/testing';
import { ArmoniaController } from './armonia.controller';

describe('ArmoniaController', () => {
  let controller: ArmoniaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmoniaController],
    }).compile();

    controller = module.get<ArmoniaController>(ArmoniaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
