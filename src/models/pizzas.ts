import { sequelize } from "../DB";
import { DataTypes } from "sequelize";
import { Table, Model, Column } from 'sequelize-typescript'

export interface PizzaModel {
    id?: number;
    name: string;
    price_inr: number;
    veg: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
    modelName: "Pizza",
    tableName: "Pizza"
})
export class Pizza extends Model<PizzaModel> {
    @Column({ type: DataTypes.STRING })
    name: string

    @Column({ type: DataTypes.FLOAT })
    price: number

    @Column({ type: DataTypes.BOOLEAN })
    veg: boolean
}

