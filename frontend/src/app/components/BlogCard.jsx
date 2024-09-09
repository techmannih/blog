import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm mx-auto">
        <h3 className="text-lg font-bold mb-4 text-black">Confirm Delete</h3>
        <p className="text-black">Are you sure you want to delete this post?</p>
        <div className="mt-6 flex justify-end">
          <Button
            className="mr-4 bg-white text-black border-black border-2"
            onClick={onCancel}
            variant="outline"
          >
            Cancel
          </Button>
          <Button as="a" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/delete/${post.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post deleted:", data);
        window.location.reload(); // Reload page after deleting post
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <>
      {showModal && (
        <ConfirmationModal
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
      <Card className="m-3 xl:w-[800px] lg:w-[700px] md:w-[520px] max-sm:w-[300px]">
        <CardHeader className="h-full">
          <CardTitle className="h-full">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-wrap">
          <CardDescription className="text-sm text-muted-foreground">
            {post.content.slice(0, 100)}...
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link href={`/post/${post.id}`} passHref>
            <Button as="a">Read More</Button>
          </Link>
          <Button
            onClick={() => setShowModal(true)} // Show confirmation modal on click
            className="ml-4 hover:text-red-600"
            variant="danger"
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogCard;
