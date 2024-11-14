import React from "react";
import { gql, wpApolloClient } from "@/utils/ApolloClient";

// Importing UI components from your local library
import { Card, CardHeader, CardBody } from "@/components/ui";

// Combined GraphQL query to fetch post title and comments
const GET_PAGE_CONTENT_WITH_COMMENTS = gql`
  query GetPageContentWithComments {
    post(id: "/hello-world", idType: SLUG) {
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
    query: GET_PAGE_CONTENT_WITH_COMMENTS, // Use the combined query
  });

  const { post } = data.data; // Extract the post and comments from the response

  return (
    <main style={{ padding: "2rem" }}>
      {/* Post Title */}

      {/* Display comments if they exist */}
      {post.comments?.nodes?.map((comment, index) => (
        <Card key={index} style={{ marginBottom: "1.5rem", padding: "1rem" }}>
          <CardHeader></CardHeader>
          <CardBody>{/* Render comment content safely as HTML */}</CardBody>
        </Card>
      ))}
    </main>
  );
}
