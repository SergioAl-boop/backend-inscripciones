
import { IsEnum } from 'class-validator';
import { EstadoInscripcion } from '../inscripciones.entity';

export class UpdateEstadoDto {
  @IsEnum(EstadoInscripcion)
  estado: EstadoInscripcion;
}
