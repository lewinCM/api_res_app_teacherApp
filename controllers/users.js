const { userModel } = require("../models");

const AllUsers = async (req, res) => {
  const user = req.user
  const dataUsers = await userModel.find({})

  res.status(200).send({ dataUsers, user })
};
const ByIdUser = async (req, res) => {
  res.send("ByIdUser");
};
const UpdateUser = async (req, res) => {
  res.send("UpdateUser");
};
const DeleteUser = async (req, res) => {
  res.send("DeleteUser basado en roles");
};

// user admin


module.exports = { AllUsers, ByIdUser, UpdateUser, DeleteUser };