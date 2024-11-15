/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { gql } from "@apollo/client";
import { wpApolloClient } from "@/utils/ApolloClient";
import { Card } from "@/components/ui/card"; // Shadcn UI Card
import Image from "next/image";
import CommentForm from "@/components/CommentForm"; // Comment form component

// Define types for the data you're working with
interface Author {
  node: {
    name: string;
  };
}

interface Comment {
  content: string;
  author: Author;
  date: string;
}

interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string | null;
  };
}

interface Post {
  id: string;
  title: string;
  content: string;
  featuredImage: FeaturedImage | null;
  comments: {
    nodes: Comment[];
  };
}

// GraphQL query to fetch post content and comments
const GET_PAGE_CONTENT_WITH_COMMENTS = gql`
  query GetPageContentWithComments($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
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

// Fetch data server-side
export async function getServerSideProps() {
  try {
    const { data } = await wpApolloClient.query({
      query: GET_PAGE_CONTENT_WITH_COMMENTS,
      variables: { slug: "/hello-world" },
      fetchPolicy: "network-only",
    });

    return {
      props: {
        post: data.post,
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { props: { post: null } };
  }
}

interface PageProps {
  post: Post | null;
}

export default function Page({ post }: PageProps) {
  if (!post) {
    return <p className="text-red-500">Post not found.</p>;
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
            width={600}
            height={337}
            className="w-full max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Post content */}
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
            <h3 className="text-lg font-semibold">
              {comment.author.node.name} says:
            </h3>
            <div
              className="mt-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
            <div className="my-4 border-t border-gray-300"></div>
            <p className="text-xs text-gray-500">
              {new Date(comment.date).toLocaleString()}
            </p>
          </Card>
        ))
      ) : (
        <p className="text-gray-500">No comments available.</p>
      )}

      {/* Comment Form */}
      <CommentForm postSlug={post.id} />
    </main>
  );
}
