'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({products}) {
      // define association here
      this.belongsTo(products, { foreignKey: "products_id" });
    }
  }
  products_image.init({
    path: DataTypes.TEXT
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'products_image',
  });
  return products_image;
};