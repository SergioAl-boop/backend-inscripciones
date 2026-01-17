import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ArmoniaService } from './armonia.service';

@Controller('armonia')
export class ArmoniaController {

  constructor(private readonly armoniaService: ArmoniaService) {}

  @Get('fotos')
  getFotos() {
    return this.armoniaService.obtenerFotos();
  }

 
 @Post('subir')
@UseInterceptors(FileInterceptor('foto', {
  dest: './uploads/armonia',
}))
subirFoto(@UploadedFile() file: Express.Multer.File) {
  const url = `http://localhost:3000/uploads/armonia/${file.filename}`;
  return this.armoniaService.agregarFoto(url);
}


}
