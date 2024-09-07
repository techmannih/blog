import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("hello from my side");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
