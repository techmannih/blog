"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "./globals.css";

// Dynamically import BlogCard
const BlogCard = dynamic(() => import("./components/BlogCard"), { ssr: false });

export default function Home() {
  const [posts, setPosts] = useState([]);
  console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
      try {
        const response = await fetch(
          `https://blognext-ckh7gyhzd6f2gcg8.eastus-01.azurewebsites.net/api/posts/get`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="blog-list max-w-7xl">
        <h1 className="font-bold m-2">All Blog Posts</h1>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
