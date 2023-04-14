import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): User[] {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Body() data: CreateUserDto): any {
    const res = this.userService.insert(data);
    return {
      message: 'user added',
      success: true,
      data: res,
    };
  }
  @Get(':id')
  getUser(@Param('id') id: string): User {
    const foundUser = this.userService.findById(id);
    return foundUser;
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string): any {
    this.userService.deleteById(id);
    return {
      message: 'user deleted',
    };
  }
}
