import { Module } from '@nestjs/common';
import { ArmoniaController } from './armonia.controller';
import { ArmoniaService } from './armonia.service';

@Module({
  controllers: [ArmoniaController],
  providers: [ArmoniaService]
})
export class ArmoniaModule {}
