/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql as apolloGql,
} from "@apollo/client";

const wpApolloClient: any = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WP_GRAPHQL_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  cache: new InMemoryCache(),
});

export { wpApolloClient, apolloGql as gql };
