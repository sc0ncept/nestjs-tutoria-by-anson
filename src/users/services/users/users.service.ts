import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/types/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'John',
      password: 'John',
    },
    {
      username: 'Jane',
      password: 'Jane',
    },
    {
      username: 'Janet',
      password: 'Janet',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
