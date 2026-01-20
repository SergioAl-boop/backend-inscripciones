import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Donacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destino: string;

  @Column('decimal')
  monto: number;

  @CreateDateColumn()
  fecha: Date;
}
