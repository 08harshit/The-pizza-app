import { Sequelize } from "sequelize-typescript";
import { Pizza } from "./models/pizzas";
import {Ingredient} from './models/ingredients'
import {User} from './models/user'

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "arjuna.db.elephantsql.com",
  database: "leokovcl",
  username: "leokovcl",
  password: "Ry8jIKqtW7XS9nRAcXx45GjPKKDjy2d3",
  models: [Pizza,Ingredient,User],
  repositoryMode: true,
  sync: { force: true }
})

export const testDbConnection = async () => {
  try {
    await sequelize.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

sequelize.sync()


testDbConnection();
module.exports = { sequelize, testDbConnection };
