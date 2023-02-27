import { Inject, Injectable } from '@nestjs/common';
import { comparePasswords } from 'src/auth/utils/bcrypt';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}
  async validateUser(email: string, password: string) {
    const userDB = await this.usersService.findUserByUsername(email);
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        console.log('User Validation Success!');
        return userDB;
      } else {
        console.log('Password did not matched!');
        return null;
      }
    }
    console.log('User Validation Failed!');
    return null;
  }
}
