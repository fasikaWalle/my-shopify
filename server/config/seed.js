const db = require("./connection");
const { User, Product, Category, ProductDetail } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Womens" },
    { name: "Mens" },
    { name: "Kids" },
    { name: "Sale" },
    { name: "New Arrival" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Tin of Cookies",
      category: categories[0]._id,
      price: 2.99,
      productDetail:[
        
      ]
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "admin",
  });
  await ProductDetail.deleteMany();
  
  await ProductDetail.create({
    quantity: 500,
    image: "cookie-tin.jpg",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
  });

  console.log("users seeded");

  process.exit();
});
