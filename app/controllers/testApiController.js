const { getJoke, getCameraInfo, getDeepBlueInfo, getCookieDeepblue } = require("../services/testApiService");
const logger = require('../../logger');

const getjokesController = async (req, res, next) => {
  try {
    const joke = await getJoke();
    res.status(200).send(joke);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getCameraInfoController = async (req, res, next) => {
  try {
    const cameraInfo = await getCameraInfo();
    console.log(`DEEPBLUE CONTROLLER: `);
    console.log(req);
    res.status(201).send(cameraInfo);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const getDeepBlueInfoController = async (req, res, next) => {
  try {
    const cookie = await getCookieDeepblue();
    console.log(`DEEPBLUE COOKIE: `);
    console.log(cookie);
    const deepblueInfo = await getDeepBlueInfo(cookie);
    res.status(200).send(deepblueInfo);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};
module.exports = { getjokesController, getCameraInfoController, getDeepBlueInfoController };