import { Module } from '@nestjs/common';
import { DonacionesController } from './donaciones.controller';
import { DonacionesService } from './donaciones.service';
import { Donacion } from './donaciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion])],
  controllers: [DonacionesController],
  providers: [DonacionesService],
})
export class DonacionesModule {}
