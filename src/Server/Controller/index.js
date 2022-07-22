const model = require('../Model/index.js');

const getEvents = (req, res) => {
  model.retrieveEvents()
  .then((success) => {
    res.status(200).send(success);
  })
  .catch((error) => {
    res.status(500).send(error);
  })
}

const getImages = (req, res) => {
  model.retrieveImages()
  .then((success) => {
    res.status(200).send(success);
  })
  .catch((error) => {
    res.status(500).send(error);
  })
}

const getWelcome = (req, res) => {
  model.retrieveWelcome()
  .then((success) => {
    res.status(200).send(success);
  })
  .catch((error) => {
    res.status(500).send(error);
  })
}

const getMenu = (req, res) => {
  model.retrieveMenu()
  .then((success) => {
    res.status(200).send(success);
  })
  .catch((error) => {
    res.status(500).send(error);
  })
}

module.exports = {
  getEvents,
  getImages,
  getWelcome,
  getMenu
}