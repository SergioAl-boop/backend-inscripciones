import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // tu password de phpMyAdmin
      database: 'escuela_musica',
      autoLoadEntities: true,
      synchronize: true, // SOLO desarrollo
    }),
    InscripcionesModule,
  ],
})
export class AppModule {}
