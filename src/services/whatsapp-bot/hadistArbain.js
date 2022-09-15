"use strict";

const { HadistArbain } = require("../../models");

const hadistArbain = async (body) => {
  try {
    const key = body.split("-");

    const data = await HadistArbain.findOne({
      where: {
        no: parseInt(key[1])
      }
    });

    const result = `*HADIST ARBAIN*\n\nHadist ke - ${data.dataValues.no}\n\n*${data.dataValues.title}*\n\n${data.dataValues.description}`;

    return result;
  } catch (error) {
    return false;
  }
};

module.exports = hadistArbain;
