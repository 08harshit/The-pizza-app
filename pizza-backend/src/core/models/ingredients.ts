import { DataTypes } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import {
  OrderPizzaIngredient,
  orderPizzaIngredientModel,
} from './orderPizzaIngredients';

export interface IngredientModel {
  name: string;
  categort: string;
  price: number;
}

@Table({
  modelName: 'Ingredient',
  tableName: 'Ingredient',
})
export class Ingredient extends Model<IngredientModel> {
  @Column({ type: DataTypes.STRING })
  name: string;

  @Column({ type: DataTypes.FLOAT })
  price: number;

  @Column({ type: DataTypes.STRING })
  category: string;

  @HasMany(() => OrderPizzaIngredient)
  orderPizzaIngredients: orderPizzaIngredientModel[];
}
