import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm';

/**
 * ENUM PARA EL ESTADO DE LA INSCRIPCIÓN
 */
export enum EstadoInscripcion {
  PENDIENTE = 'PENDIENTE',
  APROBADO = 'APROBADO',
  RECHAZADO = 'RECHAZADO',
}

@Entity('inscripciones')
export class Inscripcion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  curso: string;

  @Column()
  instrumento: string;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column({
    type: 'enum',
    enum: EstadoInscripcion,
    default: EstadoInscripcion.PENDIENTE,
  })
  estado: EstadoInscripcion;

  @CreateDateColumn()
  fechaRegistro: Date;
}
