import { FastifyInstance } from "fastify";
import {z} from 'zod'
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient()

function idParams(params: unknown): string{
  const getIdParams = z.object({
    id: z.string()
  })  
  const {id} = getIdParams.parse(params)
  return id
}


export async function appRoutes(app: FastifyInstance) {
  
  
  //create new admin 
  app.post('/admin', async(request) => {
    const createAdminBody = z.object({
      name: z.string(),
      cargo: z.string(),
    })
    const {name, cargo} = createAdminBody.parse(request.body)

    await prisma.admin.create({
      data:{
        name, cargo,
        
      }
    })
  })

  //read admin 
  app.get('/admin', async(request) =>{   
    const admins = await prisma.admin.findMany({
      select: {
        name: true,
        cargo: true,
      },
     
    })

    return {admins}
  })

  //update admin
  app.put('/admin/:id', async(request) => {
    const updateAdminBody = z.object({
      name: z.string(),
      cargo: z.string().nullable(),
    })
    const {name, cargo} = updateAdminBody.parse(request.body)

    const getId = Number(idParams(request.params))
    await prisma.admin.update({
      where:{
        id: getId
      },
      data:{
        name, cargo
      }
    })    
  })

  //delete admin
  app.delete('/admin/:id', async(request) => {
    const getId = Number(idParams(request.params))

    await prisma.admin.delete({
      where:{
        id: getId
      }
    })
    
  })
  
  //create service
  app.post('/service', async(request) => {
    const createServiceBody = z.object({
      name: z.string(),
      description: z.string(),
    })

    const {name, description} = createServiceBody.parse(request.body)

    await prisma.service.create({
      data:{
        name, description,
      }
    })

  })

  //read service
  app.get('/service', async(request) => {
    const services = await prisma.service.findMany({
      select:{
        name: true,
        description: true,
      }
    })

    return {services}
  })


  //update service
  app.put('/service/:id', async (request) => {
    const updateServiceBody = z.object({
      name: z.string(),
      description: z.string(),
    })
    const {name, description} = updateServiceBody.parse(request.body)
    const getId = idParams(request.params)
    
    await prisma.service.update({
      where:{
        id: Number(getId)
      },
      data:{
        name, description
      }
    })

  })

  //delete service
  app.delete('/service/:id', async(request) => {
    const getId = idParams(request.params)

    await prisma.service.delete({
      where:{
        id: Number(getId)
      }
    })
  })

  //create client
  app.post('/client', async(request) => {
    
    const createClientBody = z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      message: z.string(),
      adress: z.object({
        street: z.string(),
        number: z.number(),
        complement:  z.string(),
        district:  z.string(),
        city :     z.string(),
        state :   z.string(),
        postal_code: z.string().length(8),
               
      })
    })

    const {name, email, phone, message, adress:{street, number, complement, district, city, state, postal_code}} = createClientBody.parse(request.body)
    
    await prisma.client.create({
      data: {
        name, email, phone, message,
        created_at: new Date(),
        adress:{
          create:{
            street, number, complement, district, city, state, postal_code,
          
          }
        }
       
      }
    }) 

  })

  //read client
  app.get('/client', async(request) => {
    const clients = await prisma.client.findMany({
      include:{
        adress: true
      }
      
    })

    return {clients}
  })

  //read client with id
  app.get('/client/:id', async(request) => {
    const getId = idParams(request.params)
    const clients = await prisma.client.findUnique({
      where:{
        id: getId
      },
      include:{
        adress:true
      }
      
    })

    return {clients}
  })

  //update client
  app.put('/client/:id', async(request) => {
    const createClientBody = z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      message: z.string(),
      adress: z.object({
        street: z.string(),
        number: z.number(),
        complement:  z.string(),
        district:  z.string(),
        city :     z.string(),
        state :   z.string(),
        postal_code: z.string().length(8),
               
      })
    })

    const {name, email, phone, message, adress:{street, number, complement, district, city, state, postal_code}} = createClientBody.parse(request.body)
    const getId = idParams(request.params)
    
    await prisma.client.update({
      where:{
        id: getId
      },
      data:{
        name, email, phone, message,
        adress:{
          update:{
            street, number, complement, district, city, state, postal_code,
          }
        }
      }  
    })
  })

  //delete client
  app.delete('/client/:id', async(request) => {
    const getId =  idParams(request.params)
    await prisma.client.delete({
      where:{
        id: getId
      }
    })
  })

  //create logs
  app.post('/log', async(request) => {
    const createLogBody = z.object({
      admin_id: z.number(),
      changes:  z.string(),
      others:   z.string(),
    })

    const {admin_id, changes, others} = createLogBody.parse(request.body)
    const now = dayjs().toDate()
    await prisma.log.create({
      data:{
        admin_id,
        date: now,
        changes,
        others,
      }
    })

  })

  //read logs
  app.get('/log', async(request) => {
    const today = dayjs().toDate()
    
    const logs = await prisma.log.findMany({
    where: {
      date:{
        lte: today
      }
    }
    })

    return {logs}
  })

  
}
