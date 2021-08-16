const Promise = require("bluebird");

const Ask = require("../model/ask");

const createUserAsked = async ({ userId, question, from }) => {
  try {
    const result = await Ask.create({ userId, question, from });
    return result;
  } catch (error) {
    return error;
  }
};

const createUserAnswer = async ({
  askId,
  userId,
  questionId,
  answer,
  from,
}) => {
  try {
    const result = await Ask.updateOne({
      id: askId,
      userId,
      questionId,
      answer,
      from,
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUserAnswer,
  createUserAsked,
};
