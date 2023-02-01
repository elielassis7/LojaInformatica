import Fastify from "fastify";
import { PrismaClient} from '@prisma/client'

const app = Fastify();
const prisma = new PrismaClient();



app.get('/', async () => {
  const clients = await prisma.client.findMany({
    where: {
      name: {
        startsWith: "A"
      }
    }
  })

  return clients
})

app.listen({
  port: 3333,
}).then(()=>{
  console.log('Server Run')
})
