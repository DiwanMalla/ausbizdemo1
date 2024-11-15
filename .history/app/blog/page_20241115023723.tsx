import React from "react";
import { gql, wpApolloClient } from "@/utils/ApolloClient";
import { Card } from "@/components/ui/card"; // Import Shadcn UI Card

// Combined GraphQL query to fetch post title, comments, and content with embedded image
const GET_PAGE_CONTENT_WITH_COMMENTS = gql`
  query GetPageContentWithComments {
    post(id: "/hello-world", idType: SLUG) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
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
          date
        }
      }
    }
  }
`;

export default async function Page() {
  const data = await wpApolloClient.query({
    query: GET_PAGE_CONTENT_WITH_COMMENTS, // Use the combined query
  });

  const { post } = data.data; // Extract the post and comments from the response

  return (
    <main className="p-8 max-w-5xl mx-auto">
      {/* Post title */}
      <h1 className="text-4xl font-semibold mb-6">{post.title}</h1>

      {/* Post Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="mb-6">
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || "Post Image"}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Post content with embedded image */}
      {post.content && (
        <div
          className="mb-6 text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}

      {/* Display comments if they exist */}
      {post.comments?.nodes?.length > 0 ? (
        post.comments.nodes.map((comment, index) => (
          <Card
            key={index}
            className="mb-6 p-6 shadow-lg border border-gray-200 rounded-lg"
          >
            {/* Comment Author */}
            <h3 className="text-lg font-semibold">
              {comment.author.node.name} says:
            </h3>

            {/* Render comment content safely as HTML */}
            <div
              className="mt-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />

            {/* Divider */}
            <div className="my-4 border-t border-gray-300"></div>

            {/* Comment Date */}
            <p className="text-xs text-gray-500">
              {new Date(comment.date).toLocaleString()}
            </p>
          </Card>
        ))
      ) : (
        <p className="text-gray-500">No comments available.</p>
      )}
    </main>
  );
}