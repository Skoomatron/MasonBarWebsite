const db = require('../../DB/index.js');
const {Event} = require('../../DB/schema.js');

const retrieveEvents = async () => {
  try {
    return await Event.find({});
  } catch (error) {
    return error;
  }
}

module.exports = {
  retrieveEvents,
}