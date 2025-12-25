import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('admin/login')
  loginAdmin(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.loginAdmin(email, password);
  }

  @Post('user/login')
  loginUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.loginUser(email, password);
  }
}
