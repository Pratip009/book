const userMessageModel = require("../model/userMessageModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await userMessageModel.find();
  res.send(tasks);
};
module.exports.saveTask = (req, res) => {
  const { task } = req.body;

  userMessageModel.create({ task })
    .then((data) => {
      console.log("saved successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  userMessageModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  userMessageModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong" });
    });
};



