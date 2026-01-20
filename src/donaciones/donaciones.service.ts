import { Injectable } from '@nestjs/common';

@Injectable()
export class DonacionesService {

  private donaciones: any[] = [];

  guardar(donacion: any) {
    const nueva = {
      id: Date.now(),
      ...donacion,
      fecha: new Date()
    };
    this.donaciones.push(nueva);
    return nueva;
  }

  listar() {
    return this.donaciones;
  }
}
