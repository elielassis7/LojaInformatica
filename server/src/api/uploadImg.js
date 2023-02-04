import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../utils/cloudinary";

export const config ={
  api:{
    bodyParser: false,
  }
}

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const imageUploaded = await getImage(req);

  const imageData = await uploadImage(imageUploaded.path);

  const result = await prisma.image.create({
    data: {
      publicId: imageData.public_id,
      format: imageData.format,
      version: imageData.version.toString(),
    },
  });

  res.json(result);
}