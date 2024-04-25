
import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';

const UserModel = connection_db.define('User', {
   id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: true
   },
   lastname: {
      type: DataTypes.STRING,
      allowNull: true
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
   image: {
      type: DataTypes.STRING(1024),
      allowNull: true
   },
   role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
   }
},
   {
      tableName: 'users',
      timestamps: false
   }
);

export default UserModel; 