import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const result = await this.authService.login(email, password);

    // La respuesta tendrá:
    // { ok: true, token: 'JWT_TOKEN', role: 'admin|user', userId: number }
    return result;
  }
    // Registro de admins
  @Post('register-admins')
  registerAdmins(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.registerAdmins(email, password);
  }

  // Registro de users
  @Post('register-users')
  registerUsers(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.registerUsers(email, password);
  }
}
