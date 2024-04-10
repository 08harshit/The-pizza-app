import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { GetOrderDto, MakeOrderDto } from './order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrder(@Body() order: GetOrderDto) {
    return this.orderService.getOrder(order);
  }

  @Post()
  createOrder(@Body() order: any) {
    console.log(order);
    return this.orderService.createOrder(order);
  }
}
