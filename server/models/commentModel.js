const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "텍스트 넣어주세요"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
