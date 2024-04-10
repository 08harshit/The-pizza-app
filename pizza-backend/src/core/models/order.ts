import {
  Table,
  Column,
  Model,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import {
  OrderPizzaIngredient,
  orderPizzaIngredientModel,
} from "./orderPizzaIngredients";
import { User, UserModel } from "./user";

export interface OrderModel {
  id: number;
  date: Date;
  user_id: number;
}

@Table({
  modelName: "Order",
  tableName: "Order",
})
export class Order extends Model<OrderModel> {
  @Column({ type: DataTypes.DATE })
  date: Date;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER })
  user_id: number;

  @BelongsTo(() => User)
  user: UserModel;

  @HasMany(() => OrderPizzaIngredient)
  orderPizzaIngredients: orderPizzaIngredientModel[];
}
