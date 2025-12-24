import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

  constructor(private service: AdminService) {}

  @Post('login')
  login(@Body() body: any) {
    return this.service.login(body.username, body.password);
  }
}
