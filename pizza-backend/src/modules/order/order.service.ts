import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/core/models/ingredients';
import { Order, OrderModel } from 'src/core/models/order';
import { OrderPizzaIngredient } from 'src/core/models/orderPizzaIngredients';
@Injectable()
export class OrderService {
  async createOrder(orderr: any) {
    console.log(orderr);
    const userId = 7;
    const date = new Date().toISOString();

    // create order
    const madeorder = await Order.create({
      user_id: 7,
      date: new Date(),
    });
    // items

    const arrayOfOrder: any = [];

    for (let pizza_id in orderr.order) {
      pizza_id;
      for (let ingredient_id of orderr.order[pizza_id]) {
        ingredient_id;
        arrayOfOrder.push({
          order_id: madeorder.id,
          pizza_id: pizza_id,
          ingredient_id: ingredient_id,
        });
      }
    }

    const doneOrder = OrderPizzaIngredient.bulkCreate(arrayOfOrder);
  }

  getOrder(order_id: any) {
    return Order.findOne(order_id);
  }
}
