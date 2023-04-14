import { Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): any[] {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Request() data: any): any {
    const res = this.userService.insert(data.body);
    return {
      message: 'user added',
      success: true,
      data: res,
    };
  }
  @Get(':id')
  getUser(@Param('id') id: string): any {
    const foundUser = this.userService.findById(parseInt(id));
    return foundUser;
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string): any {
    this.userService.deleteById(parseInt(id));
    return {
      message: 'User deleted',
    };
  }
}
