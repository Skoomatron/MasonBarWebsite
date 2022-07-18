const router = require('express').Router();
const controller = require('./Controller/index.js');

router.get('/events', controller.getEvents);

module.exports = router;