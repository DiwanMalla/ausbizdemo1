import React from "react";
import { gql, wpApolloClient } from "@/utils/ApolloClient";
import { Card, CardHeader } from "@/components/ui/card";

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
      <h1
        style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "2rem" }}
      >
        {post.title}
      </h1>

      {/* Display comments if they exist */}
      {post.comments?.nodes?.map((comment, index) => (
        <Card key={index} style={{ marginBottom: "1.5rem", padding: "1rem" }}>
          <CardHeader>
            <Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {comment.author.node.name} says:
            </Text>
          </CardHeader>
          <CardBody>
            {/* Render comment content safely as HTML */}
            <div
              dangerouslySetInnerHTML={{ __html: comment.content }}
              style={{
                fontSize: "1rem",
                marginTop: "1rem",
                lineHeight: "1.5",
                color: "#555",
              }}
            />
          </CardBody>
          <Box style={{ textAlign: "right", marginTop: "1rem" }}>
            <Text style={{ fontSize: "0.8rem", color: "#888" }}>
              {new Date(comment.date).toLocaleString()}
            </Text>
          </Box>
        </Card>
      ))}
    </main>
  );
}
