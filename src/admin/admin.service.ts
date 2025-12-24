import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {

  constructor(
    @InjectRepository(Admin)
    private repo: Repository<Admin>,
  ) {}

  async login(email: string, password: string) {
    const admin = await this.repo.findOne({ where: { email } });

    if (!admin) {
      return { ok: false, message: 'Usuario no encontrado' };
    }

    if (admin.password !== password) {
      return { ok: false, message: 'Contraseña incorrecta' };
    }

    return {
      ok: true,
      role: 'admin',
    };
  }
}
