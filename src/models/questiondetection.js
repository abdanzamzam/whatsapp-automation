"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QuestionDetection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuestionDetection.init(
    {
      question: DataTypes.STRING,
      questionPrediction: DataTypes.STRING,
      category: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "QuestionDetection"
    }
  );
  return QuestionDetection;
};
