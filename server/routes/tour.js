const express = require("express");
const Router = express.Router();
const { createTour, getTours } = require("../controllers/tour");
const auth = require("../middlewares/auth");

Router.route("/").post(auth, createTour).get(getTours);

module.exports = Router;
