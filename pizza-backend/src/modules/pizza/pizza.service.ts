import { Injectable } from '@nestjs/common';
import { Pizza, PizzaModel } from 'src/core/models/pizzas';

@Injectable({})
export class PizzaService {
  constructor() {}

  create(pizza: Partial<PizzaModel>) {
    return Pizza.create(pizza);
  }

  getAll() {
    return Pizza.findAll();
  }
}
