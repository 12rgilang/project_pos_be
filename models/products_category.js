'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({products}) {
      // define association here

      this.hasOne(products, { foreignKey: "category_id" });
    }
  }
  products_category.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'products_category',
    timestamps:false
  });
  return products_category;
};