const { DataTypes } = require("sequelize");
import { sequelize } from '../DB';
import { Table, Model, Column, } from 'sequelize-typescript'



export interface userModel {
    email: String,
    name: String,
    password: String
}


@Table({

    modelName: "User",
    tableName: "User"

})


export class User extends Model<userModel> {

    @Column({ type: DataTypes.STRING })
    name: String

    @Column({ type: DataTypes.STRING })
    email: String
    @Column({ type: DataTypes.STRING })
    password: String

}





// export const User = sequelize.define("User", {
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey: true,
//         unique: true,
//         validate: {
//             isEmail: true,
//         },
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });






