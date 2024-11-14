"use client";

import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Card } from "@/components/ui/card";

// GraphQL query to fetch post title and comments
const GET_PAGE_CONTENT_WITH_COMMENTS = gql`
  query GetPageContentWithComments {
    post(id: "/hello-world", idType: SLUG) {
      id
      title
      comments {
        nodes {
          id
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

// Mutation to add a new comment
const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $content: String!) {
    createComment(input: { postId: $postId, content: $content }) {
      comment {
        id
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
`;

// Mutation to edit an existing comment
const EDIT_COMMENT = gql`
  mutation EditComment($commentId: ID!, $content: String!) {
    updateComment(input: { id: $commentId, content: $content }) {
      comment {
        id
        content
        date
      }
    }
  }
`;

export default function Page() {
  const { data, loading, error } = useQuery(GET_PAGE_CONTENT_WITH_COMMENTS);
  const [newComment, setNewComment] = useState(""); // State for new comment
  const [editCommentId, setEditCommentId] = useState<string | null>(null); // Track comment being edited
  const [editedContent, setEditedContent] = useState(""); // State for edited comment

  const [addComment, { loading: adding }] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_PAGE_CONTENT_WITH_COMMENTS], // Refetch the comments after mutation
  });

  const [editComment, { loading: editing }] = useMutation(EDIT_COMMENT, {
    refetchQueries: [GET_PAGE_CONTENT_WITH_COMMENTS], // Refetch after editing
  });

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        await addComment({
          variables: {
            postId: data?.post.id, // Post ID from the fetched data
            content: newComment,
          },
        });
        setNewComment(""); // Reset input field after adding comment
      } catch (error) {
        console.error("Error adding comment:", error);
        alert("Failed to add comment. Please try again.");
      }
    }
  };

  const handleEditComment = async () => {
    if (editedContent.trim()) {
      try {
        await editComment({
          variables: {
            commentId: editCommentId!,
            content: editedContent,
          },
        });
        setEditCommentId(null); // Reset after editing
        setEditedContent(""); // Reset input field
      } catch (error) {
        console.error("Error editing comment:", error);
        alert("Failed to save comment. Please try again.");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error(error); // Log the error for debugging
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <main className="p-8">
      {/* Post title */}
      <h1 className="text-4xl font-semibold mb-6">{data?.post.title}</h1>

      {/* Add New Comment */}
      <div className="mb-6">
        <textarea
          className="w-full p-4 border rounded-lg"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
          disabled={adding} // Disable button while adding comment
        >
          {adding ? "Adding..." : "Add Comment"}
        </button>
      </div>

      {/* Display comments if they exist */}
      {data?.post.comments?.nodes?.map((comment) => (
        <Card
          key={comment.id}
          className="mb-6 p-6 shadow-lg border border-gray-200 rounded-lg"
        >
          {/* Comment Author */}
          <h3 className="text-lg font-semibold">
            {comment.author.node.name} says:
          </h3>

          {/* If editing, show input */}
          {editCommentId === comment.id ? (
            <div>
              <textarea
                className="w-full p-4 border rounded-lg"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <button
                onClick={handleEditComment}
                className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
                disabled={editing} // Disable button while editing
              >
                {editing ? "Saving..." : "Save Changes"}
              </button>
            </div>
          ) : (
            // Display comment content
            <div
              className="mt-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          )}

          {/* Divider */}
          <div className="my-4 border-t border-gray-300"></div>

          {/* Comment Date */}
          <p className="text-xs text-gray-500">
            {new Date(comment.date).toLocaleString()}
          </p>

          {/* Edit Button */}
          <button
            onClick={() => {
              setEditCommentId(comment.id);
              setEditedContent(comment.content); // Set content for editing
            }}
            className="text-blue-500"
            disabled={editing} // Disable button while editing
          >
            Edit
          </button>
        </Card>
      ))}
    </main>
  );
}
