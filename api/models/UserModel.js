const S = require("sequelize");
const db = require("../db");

class UserModel extends S.Model {}

UserModel.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  { sequelize: db, modelName: "users", timestamps: false }
);
