import { Injectable } from '@nestjs/common';

@Injectable()
export class ArmoniaService {
  private fotos: any[] = [];

  obtenerFotos() {
    return this.fotos;
  }

  agregarFoto(url: string) {
    const nuevaFoto = {
      id: Date.now(),
      url,
    };
    this.fotos.push(nuevaFoto);
    return nuevaFoto;
  }
}
