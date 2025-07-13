import { Request, Response } from "express";
import { z } from "zod";
import { NewsService } from "../services/news.service";

const newsSchema = z.object({
  title: z.string().min(1),
  resume: z.string().min(1),
  description: z.string().min(1),
  isActive: z.coerce.boolean().optional().default(true),
});

export async function getAllNews(req: Request, res: Response) {
  try {
    const newsList = await NewsService.getAll();
    return res.json(newsList);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar notícias." });
  }
}

export async function getNewsById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const news = await NewsService.getById(id);
    if (!news)
      return res.status(404).json({ message: "Notícia não encontrada." });
    return res.json(news);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar notícia." });
  }
}

export async function createNews(req: Request, res: Response) {
  try {
    const body = newsSchema.parse(req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Imagem obrigatória." });
    }

    const created = await NewsService.create({
      ...body,
      imageKey: req.file.filename,
    });

    return res.status(201).json(created);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Erro de validação", errors: error.format() });
    }
    return res.status(500).json({ message: "Erro ao criar notícia." });
  }
}

export async function updateNews(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const body = {
      ...req.body,
      isActive: req.body.isActive === "true",
    };

    const validated = newsSchema.parse(body);

    const updated = await NewsService.update(id, {
      ...validated,
      ...(req.file && { imageKey: req.file.filename }),
    });

    return res.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Erro de validação", errors: error });
    }
    return res.status(500).json({ message: "Erro ao atualizar notícia." });
  }
}

export async function deleteNews(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await NewsService.delete(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar notícia." });
  }
}
