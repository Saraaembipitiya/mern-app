const express = require("express");
const mongoose = require("mongoose");
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

exports.getTour = (req, res) => {
  Tour.findById(req.params.id)
    .then((tour) => {
      res.status(200).send(tour);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

exports.getToursByUser = async (req, res) => {
  const { userID } = req;

  try {
    const tours = await Tour.find({ creator: userID });

    res.status(200).send(tours);
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

exports.deleteTour = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .send({ message: `No tour exists with this is: ${id}` });
    }
    await Tour.findByIdAndRemove(id);
    res.status(200).send("Tour Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTour = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, imageFile, tags } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status.send(`No tour exists with this id ${id}`);
    }
    const updatedTour = {
      title,
      description,
      creator,
      imageFile,
      tags,
      _id: id,
    };

    await Tour.findByIdAndUpdate(id, updatedTour, { new: true });
    return res.status(200).send("Update Successfully");
  } catch (error) {
    return res.status(500).send(error);
  }
};
