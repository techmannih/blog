import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", postRoutes);
app.get("/", (req, res) => {
  res.send("Blog server is running");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
