import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/types/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'John',
      password: 'John',
    },
    {
      id: 2,
      username: 'Jane',
      password: 'Jane',
    },
    {
      id: 3,
      username: 'Janet',
      password: 'Janet',
    },
  ];

  findUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  findUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
