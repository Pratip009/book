const express = require('express');
const { addTestimonial, getTestimonials, deleteTestimonial } = require('../controller/testimonialController');
const router = express.Router();

router.post('/add', addTestimonial);
router.get('/', getTestimonials);
router.delete('/remove/:id', deleteTestimonial);

module.exports = router;