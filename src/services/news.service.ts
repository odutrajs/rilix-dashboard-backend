import { z } from "zod";
import { prisma } from "../lib/prisma";

const newsSchema = z.object({
  title: z.string().min(1),
  resume: z.string().min(1),
  description: z.string().min(1),
  imageKey: z.string().min(1),
  isActive: z.boolean().optional().default(true),
});

export class NewsService {
  static async getAll() {
    return await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  static async getById(id: string) {
    return await prisma.news.findUnique({ where: { id } });
  }

  static async create(data: unknown) {
    const parsed = newsSchema.parse(data);

    return await prisma.news.create({
      data: {
        ...parsed,
      },
    });
  }

  static async update(id: string, data: unknown) {
    const parsed = newsSchema.partial().parse(data);

    return await prisma.news.update({
      where: { id },
      data: parsed,
    });
  }

  static async delete(id: string) {
    return await prisma.news.delete({
      where: { id },
    });
  }
}
