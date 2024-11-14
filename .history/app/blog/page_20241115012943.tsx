import React from "react";

import { gql, wpApolloClient } from "@/utils/ApolloClient";

const GET_PAGE_CONTENT = gql`
  query {
    post(id: "1", idType: DATABASE_ID) {
      title
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      comments {
        nodes {
          content
          author {
            node {
              name
            }
          }
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

  return (
    <main>
      <h1 style={{ fontSize: "60px" }}>{post}</h1>
      <h2>{post.content}</h2>
    </main>
  );
}
