'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) =>
{
  class Menu extends Model
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models)
    {
      // define association here
      Menu.hasMany(models.CartDetail, { foreignKey: 'ItemId' })
    }
  }
  Menu.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};