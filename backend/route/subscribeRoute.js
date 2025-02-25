const express = require('express');
const router = express.Router();
const subscribeController = require('../controller/subscribeController');

router.post('/subscribe', subscribeController.subscribe);

module.exports = router;