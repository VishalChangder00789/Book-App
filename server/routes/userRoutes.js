const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const middleware = require("../middleware/ifUserExists");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .delete(userController.deleteAllUser);

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
