//serve the response
import { Category } from "../models";
const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
  },
};

module.exports = resolvers;
