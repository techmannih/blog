"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({ title: "", content: "" });
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${id}`
        );
        const data = await response.json();
        setPost(data);
        setUpdatedPost({ title: data.title, content: data.content });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_BACKEND_URL}/posts/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );

      const data = await response.json();
      console.log("Post updated:", data);
      setPost(data);
      setIsEditing(false);
      router.push("/"); // Redirect to home page
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  if (!post)
    return <p className="flex justify-center items-center">Loading...</p>;

  return (
    <div className="flex justify-center">
      <div className="flex">
        {isEditing ? (
          <Card className="m-3 xl:w-[800px] lg:w-[700px] md:w-[520px] max-sm:w-[300px]">
            <CardHeader>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                name="title"
                value={updatedPost.title}
                onChange={handleChange}
                placeholder="Post title"
                className="mb-4"
              />
            </CardHeader>
            <CardContent>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={updatedPost.content}
                onChange={handleChange}
                placeholder="Post content"
                className="mb-4"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} className="mr-2">
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)} variant="outline">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="m-3 xl:w-[800px] lg:w-[700px] md:w-[520px] max-sm:w-[300px]">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                {post.content}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button onClick={handleEdit}>Edit</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PostPage;
