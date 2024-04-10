// import { sequelize } from "../DB";
import { DataTypes } from 'sequelize';
import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import { Ingredient } from './ingredients';
import { OrderPizzaIngredient } from './orderPizzaIngredients';

export interface PizzaModel {
  name: string;
  price_inr: number;
  veg: boolean;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  modelName: 'Pizza',
  tableName: 'Pizza',
})
export class Pizza extends Model<PizzaModel> {
  @Column({ type: DataTypes.STRING })
  name: string;

  @Column({ type: DataTypes.FLOAT })
  price: number;

  @Column({ type: DataTypes.BOOLEAN })
  veg: boolean;

  @Column({ type: DataTypes.STRING })
  url: string;

  @HasMany(() => OrderPizzaIngredient)
  orderPizzaIngredients: OrderPizzaIngredient[];
}
