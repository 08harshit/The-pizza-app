import { Body, Controller, Get, Post } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaModel } from 'src/core/models/pizzas';

@Controller({
  path: '/pizza',
})
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Post()
  createPizza(@Body() pizza: PizzaModel) {
    return this.pizzaService.create(pizza);
  }

  @Get()
  getAllPizzas() {
    return this.pizzaService.getAll();
  }
}
