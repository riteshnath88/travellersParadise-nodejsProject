const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();
  // 2) Build Template
  // 3) Render the template using tour data from 1
  res.status(200).render("overview", {
    title: "All Tours",
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data for the requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });

  // 2) Build templates
  // 3) Render template using data from 1.
  res.status(200).render("tour", {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
});

exports.logOut = catchAsync(async (req, res, next) => {
  res.clearCookie("jwt"); // Clear the cookie by setting it to expire immediately
  setTimeout(() => {
    res.redirect("/"); // Replace '/login' with the actual URL of your login page
  }, 500); // 1000 milliseconds = 1 second
});

exports.useraccount = catchAsync(async (req, res, next) => {
  res.status(200).render("userAccount", {
    title: "Log into your account",
  });
});
