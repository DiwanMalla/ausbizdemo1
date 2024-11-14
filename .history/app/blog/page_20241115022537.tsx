import { wpApolloClient } from "@/utils/ApolloClient";

const GET_PAGE_CONTENT = gql`
  query NewQuery {
    post(id: "/hello-world", idType: SLUG) {
      title
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
("use client");

import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Card } from "@/components/ui/card";

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
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const [editedContent, setEditedContent] = useState("");

  const [addComment, { loading: adding }] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_PAGE_CONTENT_WITH_COMMENTS],
  });

  const [editComment, { loading: editing }] = useMutation(EDIT_COMMENT, {
    refetchQueries: [GET_PAGE_CONTENT_WITH_COMMENTS],
  });

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        await addComment({
          variables: {
            postId: data?.post.id,
            content: newComment,
          },
        });
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
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
        setEditCommentId(null);
        setEditedContent("");
      } catch (error) {
        console.error("Error editing comment:", error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-semibold mb-6">{data?.post.title}</h1>

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
          disabled={adding}
        >
          {adding ? "Adding..." : "Add Comment"}
        </button>
      </div>

      {data?.post.comments?.nodes?.map((comment) => (
        <Card
          key={comment.id}
          className="mb-6 p-6 shadow-lg border border-gray-200 rounded-lg"
        >
          <h3 className="text-lg font-semibold">
            {comment.author.node.name} says:
          </h3>

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
                disabled={editing}
              >
                {editing ? "Saving..." : "Save Changes"}
              </button>
            </div>
          ) : (
            <div
              className="mt-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          )}

          <div className="my-4 border-t border-gray-300"></div>

          <p className="text-xs text-gray-500">
            {new Date(comment.date).toLocaleString()}
          </p>

          <button
            onClick={() => {
              setEditCommentId(comment.id);
              setEditedContent(comment.content);
            }}
            className="text-blue-500"
            disabled={editing}
          >
            Edit
          </button>
        </Card>
      ))}
    </main>
  );
}
