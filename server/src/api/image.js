import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const images = await prisma.image.findMany();
  res.json(images);
}