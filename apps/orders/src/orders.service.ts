import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repostitory';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepo: OrdersRepository) {}

  async createOrder(data: CreateOrderDto) {
    return await this.orderRepo.create(data);
  }
}
