const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: Schema.Type.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  productDetail: [
    {
      type: Schema.Type.ObjectId,
      ref: "ProductDetail",
      required: true,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
