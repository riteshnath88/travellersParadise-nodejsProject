const express = require("express");
const viewController = require("./../controllers/viewsController");
const authController = require("./../controllers/authController");

// const app = express();
// app.use(authController.isLoggedIn);

const router = express.Router();

router.get("/", authController.isLoggedIn, viewController.getOverview);
router.get(
  "/tour/:slug",
  authController.isLoggedIn,
  authController.protect,
  viewController.getTour
);
router.get("/login", authController.isLoggedIn, viewController.getLoginForm);

module.exports = router;
