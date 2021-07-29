const mongoose = require("mongoose");

//mongoose translate the data in the database to javascript object to our application
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
