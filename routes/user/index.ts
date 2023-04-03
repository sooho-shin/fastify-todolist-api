import fp from "fastify-plugin";
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";

import { db } from "@/utils/db";

export default fp(
  async (server: FastifyInstance, opts: FastifyPluginOptions) => {
    server.get(
      "/user",
      async (request: FastifyRequest, reply: FastifyReply) => {
        const [result] = await db.execute("select * from user");
        console.log("result=====>", result);
        await reply.code(200).send(result);
      }
    );
  }
);
