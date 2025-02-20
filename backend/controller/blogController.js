const Blog = require('../model/Blog');

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new blog
// @route   POST /api/v1/blogs
// @access  Public
exports.createBlog = async (req, res) => {
  const { title, subtitle, description, imageUrl } = req.body;

  try {
    const newBlog = new Blog({
      title,
      subtitle,
      description,
      imageUrl,
    });

    const blog = await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a blog
// @route   DELETE /api/v1/blogs/:id
// @access  Public
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    await blog.remove();
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};