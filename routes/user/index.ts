import fp from "fastify-plugin";
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";

import { db } from "@/utils/db";
import { getUserInfo } from "@/services/user";

export default fp(
  async (server: FastifyInstance, opts: FastifyPluginOptions) => {
    server.get(
      "/user",
      {
        schema: {
          querystring: {
            type: "object",
            properties: {
              idx: { type: "string" },
            },
          },
        },
      },
      async (request: FastifyRequest, reply: FastifyReply) => {
        const { idx } = request.query as { idx: string };
        const [result] = (await getUserInfo(idx)) as {
          idx: 1;
          name: "홍길동";
          password: "12345678";
          id: "test";
          created_date: "2023-04-04T22:45:18.000Z";
        }[];
        console.log("result=====>", result);
        await reply.code(200).send(result);
      }
    );
  }
);
