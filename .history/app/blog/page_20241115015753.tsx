import React from "react";
import { gql, wpApolloClient } from "@/utils/ApolloClient";

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
    <main>
      <h1 style={{ fontSize: "60px" }}>{post.title}</h1>

      {/* Display comments if they exist */}
      {post.comments?.nodes?.map((comment, index) => (
        <div key={index}>
          <p>
            <strong>{comment.author.node.name}</strong> says:
          </p>
          <p>{comment.content}</p>
          <p>
            <small>{new Date(comment.date).toLocaleString()}</small>
          </p>
        </div>
      ))}
    </main>
  );
}
