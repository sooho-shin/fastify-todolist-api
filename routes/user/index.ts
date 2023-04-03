import fp from "fastify-plugin";
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";

export default fp(
  async (server: FastifyInstance, opts: FastifyPluginOptions) => {
    server.get("/user", (request: FastifyRequest, reply: FastifyReply) => {
      return { hello: "user!!zz" };
    });
  }
);
