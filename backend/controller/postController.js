import db from "./../config/db.js";

// Get all posts
const getPosts = (req, res) => {
  db.all("SELECT * FROM posts", [], (err, rows) => {
    if (err) {
      console.error("Error fetching posts:", err.message);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching posts" });
    }
    res.json(rows);
  });
};

// Get a single post by ID
const getPostById = (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error(`Error fetching post with ID ${id}:`, err.message);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the post" });
    }
    if (!row) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(row);
  });
};

// Create a new post
const createPost = (req, res) => {
  const { title, content } = req.body;
  console.log("Creating post with title:", title, "and content:", content);

  db.run(
    "INSERT INTO posts (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      if (err) {
        console.error("Error creating post:", err.message);
        return res
          .status(500)
          .json({ error: "An error occurred while creating the post" });
      }
      res.status(201).json({ id: this.lastID, title, content });
      console.log("Post created with ID:", this.lastID);
    }
  );
};

// Delete a post by ID
const deletePost = (req, res) => {
  const id = req.params.id;
  db.run("DELETE FROM posts WHERE id = ?", [id], function (err) {
    if (err) {
      console.error(`Error deleting post with ID ${id}:`, err.message);
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the post" });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  });
};

const updatePost = (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log(
    "Updating post with ID:",
    id,
    "title:",
    title,
    "content:",
    content
  );

  db.run(
    "UPDATE posts SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    function (err) {
      if (err) {
        console.error(`Error updating post with ID ${id}:`, err.message);
        return res
          .status(500)
          .json({ error: "An error occurred while updating the post" });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json({ message: "Post updated" });
    }
  );
};

export { getPosts, getPostById, createPost, deletePost, updatePost };
