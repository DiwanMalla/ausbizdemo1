import React from "react";
import { gql } from "@apollo/client"; // Retain gql for query syntax
import { Card } from "@/components/ui/card"; // Import Shadcn UI Card
import Image from "next/image";

// GraphQL query to fetch post title, comments, and content with embedded image
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

// Function to fetch data using the Next.js API route
async function fetchGraphQL(query, variables = {}) {
  const res = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query.loc.source.body, variables }),
  });

  const { data, errors } = await res.json();
  if (errors) {
    console.error("GraphQL errors:", errors);
    return null;
  }

  return data;
}

export default async function Page() {
  // Fetch data using the proxy API
  const data = await fetchGraphQL(GET_PAGE_CONTENT_WITH_COMMENTS);

  if (!data) {
    return <p>Error fetching data.</p>;
  }

  const { post } = data; // Extract the post data

  return (
    <main className="p-8 max-w-5xl mx-auto">
      {/* Post title */}
      <h1 className="text-4xl font-semibold mb-6">{post.title}</h1>

      {/* Post Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="mb-6">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || "Post Image"}
            width={600}
            height={337}
            className="w-full max-w-full h-auto rounded-lg shadow-lg"
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
