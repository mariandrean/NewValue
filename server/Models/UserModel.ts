
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
      type: DataTypes.STRING(50),
      allowNull: true
   },
   lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
   },
   email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false
   },
   password: {
      type: DataTypes.STRING(50),
      allowNull: false
   },
   role: {
      type: DataTypes.STRING(255),
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