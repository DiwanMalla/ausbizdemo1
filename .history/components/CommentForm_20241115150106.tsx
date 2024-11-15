"use client";
import React, { useState, useEffect } from "react";
import { gql, wpApolloClient } from "@/utils/ApolloClient";

const CommentForm = ({ postSlug }) => {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [postId, setPostId] = useState(null);

  // Fetch post ID based on slug
  useEffect(() => {
    const fetchPostId = async () => {
      try {
        console.log("Fetching post ID for slug:", postSlug); // Debugging log
        const { data } = await wpApolloClient.query({
          query: gql`
            query GetPostIdBySlug($slug: String!) {
              post(id: $slug, idType: SLUG) {
                id
              }
            }
          `,
          variables: { slug: postSlug }, // Pass the slug as a variable
        });

        console.log("Fetched post ID:", data.post.id); // Log the fetched post ID

        setPostId(data.post.id); // Set the post ID state
      } catch (error) {
        console.error("Error fetching post ID:", error);
        setErrorMessage("Failed to fetch post ID.");
      }
    };

    if (postSlug) {
      fetchPostId();
    }
  }, [postSlug]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    console.log("Post ID before submitting:", postId); // Debugging log for post ID

    if (!postId) {
      setErrorMessage("Post ID not found");
      setIsSubmitting(false);
      return;
    }

    try {
      // Make sure postId is a number, if necessary
      const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: postId, // Use the post ID here
          author_name: authorName,
          author_email: authorEmail,
          content: commentContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error:", errorData); // Log the error response
        setErrorMessage("Failed to submit comment");
      } else {
        const data = await response.json();
        console.log("Comment Submitted:", data); // Log successful submission
        setAuthorName("");
        setAuthorEmail("");
        setCommentContent("");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl mb-4">Leave a Comment</h2>

      {/* Only show the form if postId is set */}
      {postId ? (
        <>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="authorName">
              Name:
            </label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="authorEmail">
              Email:
            </label>
            <input
              type="email"
              id="authorEmail"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="commentContent">
              Comment:
            </label>
            <textarea
              id="commentContent"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isSubmitting ? "Submitting..." : "Submit Comment"}
          </button>
        </>
      ) : (
        <p>Loading post details...</p>
      )}
    </form>
  );
};

export default CommentForm;
