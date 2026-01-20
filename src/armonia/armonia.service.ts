import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ArmoniaService implements OnModuleInit {

  private fotos: any[] = [];
  private readonly uploadsPath = path.join(
    __dirname,
    '..',
    '..',
    'uploads',
    'armonia',
  );

  onModuleInit() {
    this.cargarFotosDesdeDisco();
  }

  private cargarFotosDesdeDisco() {
    if (!fs.existsSync(this.uploadsPath)) {
      return;
    }

    const archivos = fs.readdirSync(this.uploadsPath);

    this.fotos = archivos.map((file) => ({
      id: file,
      url: `http://localhost:3000/uploads/armonia/${file}`,
    }));
  }

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
