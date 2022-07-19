const db = require('../../DB/index.js');
const {Event, WelcomeImage, Welcome} = require('../../DB/schema.js');

const retrieveEvents = async () => {
  try {
    return await Event.find({});
  } catch (error) {
    return error;
  }
}

const retrieveImages = async () => {
  try {
    return await WelcomeImage.find({});
  } catch (error) {
    return error;
  }
}

const retrieveWelcome = async () => {
  try {
    return await Welcome.find({});
  } catch (error) {
    return error;
  }
}

module.exports = {
  retrieveEvents,
  retrieveImages,
  retrieveWelcome,
}