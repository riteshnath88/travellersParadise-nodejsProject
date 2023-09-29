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
router.get("/logout", viewController.logOut);
router.get(
  "/useraccount",
  authController.isLoggedIn,
  authController.protect,
  viewController.useraccount
);

module.exports = router;
