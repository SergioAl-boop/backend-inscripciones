import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards
} from '@nestjs/common';

import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { AdminGuard } from 'src/auth/admim.guard';

@Controller('inscripciones')
export class InscripcionesController {

  constructor(private service: InscripcionesService) {}

  // 🧑‍🎓 USUARIO
  @Post()
  crear(@Body() dto: CreateInscripcionDto) {
    return this.service.crear(dto);
  }

  // 🛡 ADMIN
  //@UseGuards(AdminGuard)
  @Get()
  obtenerTodas() {
    return this.service.obtenerTodas();
  }

  @UseGuards(AdminGuard)
  @Patch(':id/estado')
  actualizarEstado(
    @Param('id') id: number,
    @Body() dto: UpdateEstadoDto
  ) {
    return this.service.actualizarEstado(id, dto.estado);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }

  
}
