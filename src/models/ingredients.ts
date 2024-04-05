import { sequelize } from "../DB";
import { DataTypes } from "sequelize";
import { Table, Model, Column } from 'sequelize-typescript'



export interface IngredientModel{
    name:String,
    categort:String,
    price:Number
}


@Table({
    modelName: "Ingredient",
    tableName: "Ingredient"
})

export class Ingredient extends Model<IngredientModel> {
    @Column({ type: DataTypes.STRING })
    name: string;

    @Column({ type: DataTypes.FLOAT })
    price: number;

    @Column({ type: DataTypes.STRING })
    category: String
}



