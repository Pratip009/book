const express = require('express');
const router = express.Router();
const { submitCareerForm } = require('../controller/careerController');

router.post('/careers', submitCareerForm);

module.exports = router;