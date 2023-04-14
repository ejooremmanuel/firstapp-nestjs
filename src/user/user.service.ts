import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: any[] = [
    {
      id: 1,
      name: 'Jake',
    },
    {
      id: 2,
      name: 'June',
    },
  ];
  findAll(): any[] {
    return this.users;
  }
  insert(data: any): any {
    this.users.push(data);
    return data;
  }
  findById(id: number): any[] {
    return this.users.find((user) => user.id === id);
  }
  deleteById(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
