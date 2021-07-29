const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type ProductDetail {
    quantity: Int
    image: String
    description: String
  }
  type Product {
    _id: ID
    name: String
    price: Float
    category: Category
    productDetail: ProductDetail
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    firstname: String
    lastname: String
    email: String
    orders: [Order]
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    prduct(_id: ID!): Product
    order(_id: ID!): [Order]
    user: User
  }
  type Mutation {
    addUser(
      firstname: String!
      lastname: String!
      email: String!
      password: String!
    ): Auth
    addOrder(prodcts: [ID]!): Order
    updateUser(
      firstname: String
      lastname: String
      email: String
      password: String!
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
