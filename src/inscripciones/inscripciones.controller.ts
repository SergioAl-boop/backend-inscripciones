import { Controller, Post, Body } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';

@Controller('inscripciones')
export class InscripcionesController {

  constructor(private service: InscripcionesService) {}

  @Post()
  crear(@Body() body: any) {
    return this.service.crear(body);
  }
}
    