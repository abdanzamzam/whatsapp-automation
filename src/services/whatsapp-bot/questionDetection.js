"use strict";

const { Op } = require("sequelize");
const {
  QuestionDetection,
  QuestionAnswer,
  foreignQuestion
} = require("../../models");

const questionDetection = async (body) => {
  try {
    const data = await QuestionDetection.findAll({
      where: { question: { [Op.like]: `%${body}%` } },
      group: ["questionPrediction", "category"],
      attributes: ["questionPrediction", "category"]
    });

    if (data.length > 1) {
      let result = `Mungkin yang Anda maksud: \n\n`;
      let prediction = "";
      let no = 1;

      data.map((value, index) => {
        prediction += `[${no}] - ${value.questionPrediction}\n`;
        no++;
      });

      result += prediction;

      return result;
    } else if (data.length === 1) {
      const answer = await QuestionAnswer.findOne({
        where: { question: data[0].questionPrediction }
      });

      if (answer && data[0].category === "Salam") {
        let result = `${answer.answer}`;

        return result;
      } else if (answer) {
        let result = `${answer.question}\n\n${answer.answer}`;

        return result;
      }

      let result = data[0].questionPrediction;

      return result;
    } else {
      await foreignQuestion.create({ question: body, answer: null });
    }

    return false;
  } catch (error) {
    return false;
  }
};

module.exports = questionDetection;
