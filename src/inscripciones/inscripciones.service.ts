import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscripcion } from './inscripciones.entity';

@Injectable()
export class InscripcionesService {

  constructor(
    @InjectRepository(Inscripcion)
    private repo: Repository<Inscripcion>,
  ) {}

  crear(data: Partial<Inscripcion>) {
    const inscripcion = this.repo.create(data);
    return this.repo.save(inscripcion);
  }
}
