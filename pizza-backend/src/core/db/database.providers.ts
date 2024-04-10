import { Sequelize } from 'sequelize-typescript';
import { Order } from '../models/order';
import { Ingredient } from '../models/ingredients';
import { OrderPizzaIngredient } from '../models/orderPizzaIngredients';
import { Pizza } from '../models/pizzas';
import { User } from '../models/user';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Maa@1234',
        database: 'postgres',
      });
      sequelize.addModels([
        Order,
        Ingredient,
        OrderPizzaIngredient,
        Pizza,
        User,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
