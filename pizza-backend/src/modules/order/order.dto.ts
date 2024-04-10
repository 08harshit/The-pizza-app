import { OrderPizzaIngredientDTO } from '../order-pizzaingredients/orderPizzaIngredients.dto';

export interface MakeOrderDto {
  date: Date;
  user_id: number;
  orderPizzaIngredients: OrderPizzaIngredientDTO[];
}

export interface GetOrderDto {
  order_id: number;
}
