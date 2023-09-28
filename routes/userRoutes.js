const express = require("express");
const multer = require("multer");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();
const upload = multer({ dest: "public/img/users" });

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.login);

router.patch("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.patch("/updateMe", authController.protect, userController.updateMe);
router.delete("/deleteMe", authController.protect, userController.deleteMe);

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.getAllUsers
  )
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    userController.createUser
  );
router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.getUser
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    userController.deleteUser
  );

router.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getUser
);

module.exports = router;
