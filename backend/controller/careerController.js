const Career = require('../model/Career');

exports.submitCareerForm = async (req, res) => {
  try {
    const { fullName, address, qualifications, gender, coverLetter, cvUrl } = req.body;

    if (!fullName || !address || !qualifications || !coverLetter || !cvUrl) {
      return res.status(400).json({ success: false, message: 'Please fill in all fields and provide your CV URL.' });
    }

    // Save the form data to the database
    const career = new Career({
      fullName,
      address,
      qualifications,
      gender,
      coverLetter,
      cvUrl,
    });
    await career.save();

    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting career form:', error);
    res.status(500).json({ success: false, message: 'There was an error submitting the form.' });
  }
};