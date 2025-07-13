import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { newsRoutes } from "./routes/news.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/news", newsRoutes);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
