import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscripcion } from './inscripciones.entity';
import { InscripcionesController } from './inscripciones.controller';
import { InscripcionesService } from './inscripciones.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inscripcion])],
  controllers: [InscripcionesController],
  providers: [InscripcionesService],
})
export class InscripcionesModule {}
