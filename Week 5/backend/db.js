const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);
const todoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  isComplete: {
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
