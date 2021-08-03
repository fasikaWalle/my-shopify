import gql from "graphql-tag";

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
