const userModel = require("../models/userModel");
const UserModel = require("../models/userModel");

exports.deleteAllUser = async (req, res, next) => {
  try {
    await userModel.deleteMany();
    res.status(201).json({
      status: "sucess",
      message: "Deleted All",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Something went wrong while deletiom=n",
    });
  }
};

exports.getAllUsers = async (req, res, next) => {
  const users = await UserModel.find();
  res.status(201).json({
    status: "sucess",
    data: {
      users,
    },
  });
};

exports.createUser = async (req, res, next) => {
  // check if the user exists or not

  const { email, password } = req.body;

  const user = await userModel.findOne({ email, password });

  if (user) {
    res.status(400).json({
      status: "fail",
      message: "User already exist",
    });
  } else {
    try {
      const { firstName, lastName, email, phone } = req.body;

      if (!firstName || !lastName || !email || !phone || !password) {
        res.status(400).json({
          status: "fail",
          message: "Need all the details",
        });
      }
      const newUser = await UserModel.create(req.body);
      res.status(201).json({
        status: "success",
        message: "User got created",
        data: {
          newUser,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "Error produced in UserController.createUser",
        error: error,
      });
    }
  }
};
