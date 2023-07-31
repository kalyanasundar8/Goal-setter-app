const mongoose = require("mongoose");

const goalsSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add some text"],
    },
    description: {
      type: String,
      required: [true, "Please add some description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("goal", goalsSchema);
