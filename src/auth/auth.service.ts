import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from 'src/admin/admin.entity';
import { User } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Admin)
    private adminRepo: Repository<Admin>,

    @InjectRepository(User)
    private userRepo: Repository<User>,

    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {

    // 1️⃣ Buscar en admins
    const admin = await this.adminRepo.findOne({ where: { email } });
    if (admin && admin.password === password) {
      console.log('🛡️ Login ADMIN:', email);

      const token = this.jwtService.sign({
        sub: admin.id,
        email,
        role: 'admin',
      });

      return {
        ok: true,
        token,
        role: 'admin',
        userId: admin.id,
      };
    }

    // 2️⃣ Buscar en users
    const user = await this.userRepo.findOne({ where: { email } });
    if (user && user.password === password) {
      console.log('👤 Login USER:', email);

      const token = this.jwtService.sign({
        sub: user.id,
        email,
        role: 'user',
      });

      return {
        ok: true,
        token,
        role: 'user',
        userId: user.id,
      };
    }

    throw new UnauthorizedException('Credenciales incorrectas');
  }
}
