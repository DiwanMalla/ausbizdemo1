"use client";
import React, { useState } from "react";

const CommentForm = ({ postId }) => {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: postId,
          author_name: authorName,
          author_email: authorEmail,
          content: commentContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error:", errorData);
        setErrorMessage("Failed to submit comment");
      } else {
        const data = await response.json();
        console.log("Comment Submitted:", data);
        // Reset the form on success
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
    </form>
  );
};

export default CommentForm;
