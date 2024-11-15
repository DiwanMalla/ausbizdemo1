"use client";
import React, { useState, useEffect } from "react";
import { gql, wpApolloClient } from "@/utils/ApolloClient";

const CommentForm = ({ postSlug }) => {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Fetch post details based on slug (optional)
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        console.log("Fetching details for slug:", postSlug); // Debugging log

        // Query to fetch post details based on slug (optional if you need additional info)
        const { data } = await wpApolloClient.query({
          query: gql`
            query GetPostBySlug($slug: String!) {
              post(id: $slug, idType: SLUG) {
                title
                content
              }
            }
          `,
          variables: { slug: postSlug },
        });

        console.log("Fetched post details:", data); // Log the entire data response

        // If no post found, show error message
        if (!data?.post) {
          setErrorMessage("Post not found.");
        }

        setIsLoading(false); // Update loading state when post details are fetched
      } catch (error) {
        console.error("Error fetching post details:", error);
        setErrorMessage("Failed to fetch post details.");
        setIsLoading(false); // Stop loading on error
      }
    };

    if (postSlug) {
      fetchPostDetails();
    }
  }, [postSlug]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    console.log("Post slug before submitting:", postSlug); // Debugging log for post slug

    if (!postSlug) {
      setErrorMessage("Post slug not found");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send the slug directly in the request
      const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_slug: postSlug, // Use the post slug directly here
          author_name: authorName,
          author_email: authorEmail,
          content: commentContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error:", errorData); // Log the error response
        setErrorMessage(
          `Invalid email address: ${errorData.data.details.author_email.message}`
        );
        // Convert errorData to a string
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

      {/* If still loading, show loading message */}
      {isLoading ? (
        <p>Loading post details...</p>
      ) : (
        <>
          {/* Show form only when slug is available */}
          {postSlug ? (
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
            <p>Post slug is not available.</p>
          )}
        </>
      )}
    </form>
  );
};

export default CommentForm;
