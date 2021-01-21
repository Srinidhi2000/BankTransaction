const path=require('path');
const userdata = require(path.join(__dirname,'../models/userdata'));

exports.listAllUsers = (req, res) => {
  userdata.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};
// Creating a new task and save it to database....
exports.createNewUser = (req, res) => {
  let newUserData = new userdata(req.body);
  newUserData.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(task);
  });
};
// read a perticular task by _id......
exports.readUser = (req, res) => {
  userdata.findById(req.params._id, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};
//Update a perticular task by _id ....
exports.updateUser = (req, res) => {
  userdata.findOneAndUpdate(
    { _id: req.params._id },
    { $set:{balance:req.body.balance},
      $push:{transactions:req.body.transactions}},
    { upsert: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};
// Delete a perticular task by _id .....
exports.deleteUser = (req, res) => {
  userdata.remove({ _id: req.params._id }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};