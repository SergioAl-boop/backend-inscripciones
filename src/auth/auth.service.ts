import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from 'src/admin/admin.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Admin)
    private adminRepo: Repository<Admin>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async loginAdmin(email: string, password: string) {
    const admin = await this.adminRepo.findOne({ where: { email } });

    if (!admin || admin.password !== password) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return {
      ok: true,
      role: 'admin',
    };
  }

  async loginUser(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return {
      ok: true,
      role: 'user',
    };
  }
}
