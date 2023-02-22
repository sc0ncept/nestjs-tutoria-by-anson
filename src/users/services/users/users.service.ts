import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/entities/User';
import { SerializedUser, User } from 'src/types/user';
import { CreateUserDto } from 'src/users/Dto/create.user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [];

  findUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  findUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createNewUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);

    return this.userRepository.save(newUser);
  }
}
