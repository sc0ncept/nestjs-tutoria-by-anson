import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/create.customer.dto';
import { Customer } from 'src/types/customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'John John',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Jane Jane',
      email: 'jane@gmail.com',
    },
    {
      id: 3,
      name: 'Janet Janet',
      email: 'janet@yahoo.com',
    },
  ];

  findCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  createNewCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
    return this.customers;
  }
}
