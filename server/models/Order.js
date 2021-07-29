const mongoose = require("mongoose");
const { Schema } = mongoose.Mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  product: [
    {
      type: Schema.Type.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
