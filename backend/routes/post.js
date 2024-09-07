import express from "express";
const router = express.Router();

import {
  getPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
} from "../controller/postController.js";
router.get("/posts/get", getPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", createPost);
router.delete("/posts/delete/:id", deletePost);
router.put("/posts/update/:id", updatePost);

export default router;
