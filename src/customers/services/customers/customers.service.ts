import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomers() {
    return [
      {
        id: 1,
        email: 'john@gmail.com',
        createdAt: new Date(),
      },
      {
        id: 2,
        email: 'jane@gmail.com',
        createdAt: new Date(),
      },
    ];
  }
}
