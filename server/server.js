//creating instance of our server
const express = require("express");
const app = new express();
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schema");
const { authMiddleware } = require("./utils/auth");
//Change incoming request to string|Array
app.use(express.urlencoded({ extended: false }));

//Change incoming request to Json
app.use(express.json());
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  //listening our server at port 3001
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
