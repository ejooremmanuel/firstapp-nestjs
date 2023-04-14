import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: '1',
      name: 'Jake',
    },
    {
      id: '2',
      name: 'June',
    },
  ];
  findAll(): User[] {
    return this.users;
  }
  insert(data: CreateUserDto): User {
    const tData: User = { id: new String(10).toString(), ...data };
    this.users.push(tData);
    return tData;
  }
  findById(id: string): User {
    return this.users.find((user) => user.id === id);
  }
  deleteById(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
