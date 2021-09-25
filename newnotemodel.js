const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Newnote extends Model {}

Newnote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'name',
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'newnote',
  }
);

module.exports = Newnote;
