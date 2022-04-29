const express = require("express");
const Router = express.Router();
const {
  createTour,
  getTours,
  getTour,
  getToursByUser,
  deleteTour,
  updateTour,
} = require("../controllers/tour");
const auth = require("../middlewares/auth");

Router.route("/").post(auth, createTour).get(getTours);
Router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);
Router.route("/userTours").post(auth, getToursByUser);

module.exports = Router;
