import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}
  async validateUser(email: string, password: string) {
    const userDB = await this.usersService.findUserByUsername(email);
    if (userDB && userDB.password === password) {
      return userDB;
    }
    return null;
  }
}
