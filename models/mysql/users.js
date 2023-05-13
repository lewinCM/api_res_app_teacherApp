const { sequelize } = require("../../config/dbMysql")
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    name: { type: DataTypes.STRING, allowNull: false, },
    email: { type: DataTypes.STRING, },
    password: { type: DataTypes.STRING, },
    rol: { type: DataTypes.ENUM(["student", "admin", "tutor"]), },
  },
  {
    timestamps: true,
  }
);
User.find = User.findAll;
User.findById = User.findByPk;
module.exports = User;