const BlogModel = require("../model/blogModel");

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.send(blogs);
  } catch (err) {
    
    res.status(500).send({ error: err, msg: "Failed to fetch blogs" });
  }
};
exports.saveBlogPost = async (req, res) => {
  const { title, description } = req.body;
  // const imageUrl = req.file.path; // Path where the image is saved

  try {
    const blog = new BlogModel({
      title,
      description,
      // imageUrl
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    
    res.status(500).json({ message: "Error saving the blog post" });
  }
};
module.exports.saveBlogs = async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const blog = await BlogModel.create({ title, description, imageUrl });
    
    res.status(201).send(blog);
  } catch (err) {
   
    res.status(500).send({ error: err, msg: "Failed to save blog" });
  }
};

module.exports.updateBlogs = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    await BlogModel.findByIdAndUpdate(id, { title, description });
    res.send("Blog updated successfully");
  } catch (err) {
    
    res.status(500).send({ error: err, msg: "Failed to update blog" });
  }
};

module.exports.deleteBlogs = async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.findByIdAndDelete(id);
    res.send("Blog deleted successfully");
  } catch (err) {
   
    res.status(500).send({ error: err, msg: "Failed to delete blog" });
  }
};
