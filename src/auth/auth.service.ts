import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from 'src/admin/admin.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Admin)
    private repo: Repository<Admin>,
  ) {}

  async login(email: string, password: string) {
    const admin = await this.repo.findOne({ where: { email } });

    if (!admin) {
      return { ok: false, message: 'Admin no encontrado' };
    }

    if (admin.password !== password) {
      return { ok: false, message: 'Contraseña incorrecta' };
    }

    return {
      ok: true,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    };
  }
}
