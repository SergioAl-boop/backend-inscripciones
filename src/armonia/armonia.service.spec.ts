import { Test, TestingModule } from '@nestjs/testing';
import { ArmoniaService } from './armonia.service';

describe('ArmoniaService', () => {
  let service: ArmoniaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmoniaService],
    }).compile();

    service = module.get<ArmoniaService>(ArmoniaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
