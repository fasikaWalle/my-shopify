const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
