const model = require('../Model/index.js');

const getEvents = (req, res) => {
  model.retrieveEvents()
  .then((success) => {
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const getImages = (req, res) => {
  model.retrieveImages()
  .then((success) => {
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const getWelcome = (req, res) => {
  model.retrieveWelcome()
  .then((success) => {
    console.log(success, 'success in controller')
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

module.exports = {
  getEvents,
  getImages,
  getWelcome
}