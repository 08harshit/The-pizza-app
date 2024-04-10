import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderPizzaIngredient } from 'src/core/models/orderPizzaIngredients';
import { OrderPizzaingredientsService } from './order-pizzaingredients.service';
import { OrderPizzaIngredientDTO } from './orderPizzaIngredients.dto';

@Controller('order')
export class OrderPizzaingredientsController {
  constructor(private orderPizzaService: OrderPizzaingredientsService) {}

  @Post()
  postCart(@Body() cartItem: OrderPizzaIngredientDTO) {
    return this.orderPizzaService.postCart(cartItem);
  }

  @Get()
  getCart(@Body() cartNum: number) {
    return this.orderPizzaService.getCart(cartNum);
  }
}
