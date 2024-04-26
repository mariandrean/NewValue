
import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';
import UserModel from './UserModel';

const NewsModel = connection_db.define('News', {
   id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true
   },
   title: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   subtitle: {
      type: DataTypes.STRING(1024),
      allowNull: false
   },
   content: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   category: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   date: {
      type: DataTypes.DATEONLY,
      allowNull: false
   },
   image: {
      type: DataTypes.STRING(1024),
      allowNull: false
   },
   user_id: {
      type: DataTypes.BIGINT,
      references: {
         model: UserModel,
         key: 'id'
      }
   },
},
   {
      tableName: 'news',
      timestamps: false // Deshabilitando los campos los campos createdAt y updatedAt
   }
);

export default NewsModel; 