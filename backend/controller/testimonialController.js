const Testimonial = require('../model/Testimonial');

// Add a new testimonial
exports.addTestimonial = async (req, res) => {
  try {
    const { name, designation, description, photo } = req.body;
    const newTestimonial = new Testimonial({
      name,
      designation,
      description,
      photo,
    });
    await newTestimonial.save();
    res.status(201).json({
      message: "Testimonial added successfully",
      testimonial: newTestimonial,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add testimonial", error });
  }
};

// Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
};

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received request to delete ID:", id); // Log the ID
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ message: "Failed to delete testimonial", error });
  }
};