const router = require('express').Router();
const controller = require('./Controller/index.js');

router.get('/events', controller.getEvents);
router.get('/images', controller.getImages);
router.get('/welcome', controller.getWelcome);

module.exports = router;