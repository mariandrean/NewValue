
import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';

const UserModel = connection_db.define('User', {
 id: {
   type: DataTypes.BIGINT,
   primaryKey: true,
   autoIncrement: true,
   unique: true
 },
 name:{
    type: DataTypes.STRING,
    allowNull: false
 },
 lastname:{
    type: DataTypes.STRING,
    allowNull: false
 },
 email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
 },
 password:{
    type: DataTypes.STRING,
    allowNull: false
 },
 image:{
    type: DataTypes.STRING(1024),
    allowNull: false
 },
 role:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
 }

},
{
    tableName: 'users', // Nombre de la tabla en la base de datos
    timestamps: false // Habilitando los campos los campos createdAt y updatedAt
  }
);

console.log(UserModel === connection_db.models.User); // devuelve true


export default UserModel; 