const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Library = require("./Library");

class Library extends Model {}

Library.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  song_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'library',  
});

module.exports = Library;
