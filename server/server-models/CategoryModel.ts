import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';

const CategoryModel = connection_db.define('Category', {
   id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true
   },
   name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
},
},
   {
      tableName: 'categories',
      timestamps: false
   }
);

export default CategoryModel; 