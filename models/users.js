'use strict';
const {
  Model,UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      unique: { msg: "Username not available" },
      allowNull: false,
      validate: {
        notEmpty: { msg: "Username must not be empty" },
        notNull: { msg: "Username must not be empty" },
      },
    },
    // email: {
    //   type: DataTypes.STRING,
    //   unique: { msg: "Email already registered" },
    //   allowNull: false,
    //   validate: {
    //     isEmail: { msg: "Enter a valid email address" },
    //     notEmpty: { msg: "User email must not be empty" },
    //     notNull: { msg: "User must have an email" },
    //   },
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "User password must not be empty" },
        notNull: { msg: "User must have a password" },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "User role must not be empty" },
        notNull: { msg: "User must have a role" },
      },
    },
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'users',
  });
  return users;
};