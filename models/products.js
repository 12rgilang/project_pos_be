'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({products_category,products_image}) {
      // define association here

      this.belongsTo(products_category, { foreignKey: "category_id" });
      this.hasMany(products_image, { foreignKey: "products_id" });
    }
  }
  products.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'products',
  });
  return products;
};