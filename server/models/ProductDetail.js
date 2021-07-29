const mongoose = require("mongoose");
const { Schema } = mongoose;

const productDetailSchema = new Schema({
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

const ProductDetail = mongoose.model("ProductDetail", productDetailSchema);
module.exports = ProductDetail;
