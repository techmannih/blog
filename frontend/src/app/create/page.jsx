"use client";

import React from "react";
import PostForm from "../components/Form";

const CreatePostPage = () => {
  const handleSubmit = async (post) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      const data = await response.json();
      console.log("Post created:", data);
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="flex justify-center m-4 p-2">
      <div>
        <h1 className="font-bold text-2xl text-center m-4">
          Create a New Post
        </h1>
        <PostForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreatePostPage;
