const express = require('express');
const { getBlogs, createBlog, deleteBlog } = require('../controller/blogController');

const router = express.Router();

router.route('/').get(getBlogs).post(createBlog);
router.route('/:id').delete(deleteBlog);

module.exports = router;