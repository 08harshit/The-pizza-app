import { Injectable } from '@nestjs/common';
import { OrderPizzaIngredientDTO } from './orderPizzaIngredients.dto';
import { OrderPizzaIngredient } from 'src/core/models/orderPizzaIngredients';

@Injectable()
export class OrderPizzaingredientsService {


    getCart(cartItem: number)
    {
        return OrderPizzaIngredient.findOne({ where: { id: cartItem } })
    }

    postCart(cartItem:Partial<OrderPizzaIngredientDTO>)
    {
        return OrderPizzaIngredient.create(cartItem);
    }
}
