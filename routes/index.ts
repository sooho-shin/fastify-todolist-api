import fp from 'fastify-plugin'
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from 'fastify'

import userRoutes from './user'

export default fp(
  async (server: FastifyInstance, opts: FastifyPluginOptions) => {
    server.register(userRoutes)

    // server.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    //   return { hello: 'worldzz' }
    // })
    server.get('/todo', (request: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send('get memo list')
    })

    server.get('/todo/:id', (request: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send('get memo')
    })

    server.post('/todo', (request: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send('create new memo')
    })

    server.patch(
      '/todo/:id',
      (request: FastifyRequest, reply: FastifyReply) => {
        reply.code(200).send('update memo')
      },
    )

    server.delete(
      '/todo/:id',
      (request: FastifyRequest, reply: FastifyReply) => {
        reply.code(200).send('delete memo')
      },
    )
  },
)
