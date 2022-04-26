const express = require("express");
const Tour = require("../models/tour");

exports.createTour = async (req, res) => {
  try {
    req.body.creator = req.userID;

    const tour = Tour.create(req.body);
    res.status(200).send(tour);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getTours = async (req, res) => {
  Tour.find()
    .then((tours) => {
      res.status(200).send(tours);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};
