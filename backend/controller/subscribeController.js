const Subscribe = require('../model/Subscribe');

exports.subscribe = async (req, res) => {
  const { subscribe } = req.body;
  try {
    const newSubscribe = new Subscribe({ subscribe });
    await newSubscribe.save();
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({ message: 'Subscription failed!' });
  }
};