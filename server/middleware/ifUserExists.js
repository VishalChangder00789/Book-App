const userModel = require("../models/userModel");

exports.ifUserExists = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email, password });

    if (user) {
      res.status(400).json({
        status: "fail",
        message: "User already exist",
      });
    } else {
      res.status(201).json({
        status: "success",
        message: "User creation initialization",
        next: next(),
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User not found",
      error: error.message,
    });
  }
};
