"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class wordNeutralization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wordNeutralization.init(
    {
      word: DataTypes.STRING,
      neutralization: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "wordNeutralization"
    }
  );
  return wordNeutralization;
};
