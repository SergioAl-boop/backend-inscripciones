import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoInscripcion, Inscripcion } from './inscripciones.entity';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';

@Injectable()
export class InscripcionesService {

  constructor(
    @InjectRepository(Inscripcion)
    private repo: Repository<Inscripcion>
  ) {}

  // 🧑‍🎓 Crear inscripción (USUARIO)
  crear(data: CreateInscripcionDto) {
    const inscripcion = this.repo.create(data);
    return this.repo.save(inscripcion);
  }

  // 🛡 ADMIN: ver todas
  obtenerTodas() {
    return this.repo.find({
      order: { fechaRegistro: 'DESC' }
    });
  }

  // 🛡 ADMIN: cambiar estado
  actualizarEstado(id: number, estado: EstadoInscripcion) {
  return this.repo.update(id, { estado });
}


  // 🛡 ADMIN: eliminar
  eliminar(id: number) {
    return this.repo.delete(id);
  }
  
}
