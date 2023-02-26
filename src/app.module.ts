import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import entities from './entities';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.136',
      port: 3306,
      username: 'root',
      password: 'figa',
      database: 'nestjs_tutorial',
      entities,
      synchronize: true,
      bigNumberStrings: false,
      logging: true,
    }),
    CustomersModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
