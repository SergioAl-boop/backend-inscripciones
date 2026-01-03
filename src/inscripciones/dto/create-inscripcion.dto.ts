import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateInscripcionDto {

  @IsNotEmpty()
  curso: string;

  @IsNotEmpty()
  instrumento: string;

  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsNotEmpty()
  telefono: string;
}
