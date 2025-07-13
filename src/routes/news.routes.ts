import { Router } from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getNewsById,
  updateNews,
} from "../controller/news.controller";
import { upload } from "../middlware/upload";

export const newsRoutes = Router();

newsRoutes.get("/", getAllNews);
newsRoutes.get("/:id", getNewsById);
newsRoutes.post("/", upload.single("imageFile"), createNews);
newsRoutes.put("/:id", upload.single("imageFile"), updateNews);
newsRoutes.delete("/:id", deleteNews);
