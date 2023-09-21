const express = require("express");
const reviewController = require("./../controllers/reviewController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.createReview
  );

router
  .route("/:tourId")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    reviewController.getAllReviews
  );
router
  .route(":/id")
  .patch(
    authController.protect,
    authController.restrictTo("user", "admin"),
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo("user", "admin"),
    reviewController.deleteReview
  );

module.exports = router;
