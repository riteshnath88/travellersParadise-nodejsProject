const fs = require("fs");
const Tour = require("../models/tourModel");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      results: tours.length,
      tours,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      tour,
    });
  } catch (err) {
    res.status(404).json({
      tour,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      tour: newTour,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      data: tour,
    });
  } catch (err) {
    res.status(200).json({
      tour,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
