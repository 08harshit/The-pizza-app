import { DataTypes } from 'sequelize';
import {
  Column,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Order, OrderModel } from './order';
import { Ingredient, IngredientModel } from './ingredients';
import { Pizza, PizzaModel } from './pizzas';

export interface orderPizzaIngredientModel {
  id: number;
  order_id: number;
  pizza_id: number;
  ingredient_id: number;
}

@Table({
  modelName: 'OrderPizzaIngredient',
  tableName: 'orderPizzaIngredient',
})
export class OrderPizzaIngredient extends Model<orderPizzaIngredientModel> {
  @ForeignKey(() => Order)
  @Column({ type: DataTypes.INTEGER })
  order_id: Number;

  @BelongsTo(() => Order)
  order: OrderModel;

  @ForeignKey(() => Ingredient)
  @Column({ type: DataTypes.INTEGER })
  ingredient_id: Number;

  @BelongsTo(() => Ingredient)
  ingredient: IngredientModel;

  @ForeignKey(() => Pizza)
  @Column({ type: DataTypes.INTEGER })
  pizza_id: Number;

  @BelongsTo(() => Pizza)
  pizza: PizzaModel;
}
