const adminMessageController = require("../controller/adminMessageController");

module.exports.getTask = async (req, res) => {
  const secondtasks = await adminMessageController.find();
  res.send(secondtasks);
};
module.exports.saveTask = (req, res) => {
  const { task,secondtasks } = req.body;

  adminMessageController
    .create({ task,secondtasks })
    .then((data) => {
      
      res.status(201).send(data);
    })
    .catch((err) => {
      
      res.send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task,secondtasks } = req.body;

  adminMessageController
    .findByIdAndUpdate(id, { task,secondtasks })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => {
     
      res.send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const { task,secondtasks } = req.body;

  adminMessageController
    .findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => {
      
      res.send({ error: err, msg: "Something went wrong" });
    });
};
