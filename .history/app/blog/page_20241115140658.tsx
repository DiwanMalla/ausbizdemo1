"use client";
import React from "react";
import { gql } from "@/utils/ApolloClient"; // Assuming you have this utility for gql
import { Card } from "@/components/ui/card"; // Import Shadcn UI Card
import Image from "next/image";

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

// Modified fetchGraphQL function to use the proxy
async function fetchGraphQL(query) {
  const response = await fetch("/api/graphql", {
    // Call your API route
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }), // Pass the GraphQL query
  });

  const result = await response.json(); // Get the JSON response

  if (response.ok) {
    return result.data; // Return the data if everything is good
  } else {
    console.error("GraphQL errors:", result.errors); // Log any errors if they exist
    return null; // Return null on failure
  }
}

export default function Page() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function loadData() {
      const data = await fetchGraphQL(GET_PAGE_CONTENT_WITH_COMMENTS); // Use the fetchGraphQL function
      if (data) {
        setPost(data.post); // Set the data if it's successfully fetched
      }
    }

    loadData(); // Trigger the fetch when the component is mounted
  }, []); // Empty dependency array so it runs once on mount

  if (!post) {
    return <p>Loading...</p>; // Show loading while data is being fetched
  }

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
            width={600} // Set a fixed width for the image
            height={337} // Adjust height to maintain the aspect ratio
            className="w-full max-w-full h-auto rounded-lg shadow-lg" // Ensure the image is responsive
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
