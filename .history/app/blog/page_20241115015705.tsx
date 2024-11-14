import React from "react";

import { gql, wpApolloClient } from "@/utils/ApolloClient";

const GET_PAGE_CONTENT = gql`
  query NewQuery {
    post(id: "/hello-world", idType: SLUG) {
      title
    }
  }
`;
const GET_COMMENT = gql`
  query GetComments {
    post(id: "hello-world", idType: SLUG) {
      title
      comments {
        nodes {
          content
          author {
            node {
              name
            }
          }
          date
        }
      }
    }
  }
`;

export default async function page() {
  const data = await wpApolloClient.query({
    query: GET_PAGE_CONTENT,
  });

  const { post } = data.data;
  console.log(post);
  return (
    <main>
      <h1 style={{ fontSize: "60px" }}>{post.title}</h1>
    </main>
  );
}
