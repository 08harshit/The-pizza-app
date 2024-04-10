import { DataTypes } from 'sequelize';

import { Column, HasMany, Model, Table, Unique } from 'sequelize-typescript';
import { Order } from './order';

export interface UserModel {
  email: string;
  // user_id:Number
  name: string;
  password: string;
}

@Table({
  modelName: 'User',
  tableName: 'User',
})
export class User extends Model<UserModel> {
  @Column({ type: DataTypes.STRING })
  name: string;

  @Unique
  @Column({ type: DataTypes.STRING })
  email: string;

  @Column({ type: DataTypes.STRING })
  password: string;

  @HasMany(() => Order)
  orderPizzaIngredients: Order[];
}
