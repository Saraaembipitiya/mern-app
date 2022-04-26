const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tags: [String],
  imageFile: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Tour", tourSchema);
