import { Controller, Post, Get, Body } from '@nestjs/common';
import { DonacionesService } from './donaciones.service';

@Controller('donaciones')
export class DonacionesController {

  constructor(private readonly service: DonacionesService) {}

  @Post()
  crear(@Body() body: any) {
    return this.service.guardar(body);
  }

  @Get()
  listar() {
    return this.service.listar();
  }
}
