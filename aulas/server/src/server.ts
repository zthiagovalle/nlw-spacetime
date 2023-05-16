import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prima = new PrismaClient()

app.get('/users', async () => {
  const users = await prima.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
