"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";

const PostForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card>
      <CardHeader>
        <h2>Create New Post</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-group">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter the title"
              {...register("title", { required: "Title is required." })}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="form-group">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Enter the content"
              {...register("content", { required: "Content is required." })}
            />
            {errors.content && (
              <p className="text-red-500">{errors.content.message}</p>
            )}
          </div>

          <CardFooter>
            <div className="">
              <Button type="submit" className="">
                Create Post
              </Button>
            </div>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
