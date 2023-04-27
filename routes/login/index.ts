import fp from "fastify-plugin";
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";

import { db } from "@/utils/db";
import { getUserInfo } from "@/services/user";
import { postSignUp } from "@/services/login";

export default fp(
  async (server: FastifyInstance, opts: FastifyPluginOptions) => {
    server.post(
      "/signup",
      {
        schema: {
          body: {
            type: "object",
            properties: {
              id: { type: "string" },
              password: { type: "string" },
              confirmPassword: { type: "string" },
            },
            required: ["id", "password"],
          },
        },
      },
      async (request: FastifyRequest, reply: FastifyReply) => {
        const { id, password, confirmPassword } = request.body as {
          id: string;
          password: string;
          confirmPassword: string;
        };
        if (!id || !password || !confirmPassword) {
          reply.code(200).send({ massage: "아이디나 비번없음", code: -1 });
          return;
        }
        if (password !== confirmPassword) {
          reply.code(200).send({ massage: "확인 비밀번호 틀림", code: -2 });
          return;
        }

        const result = await postSignUp({ id, password });

        reply.code(200).send(result);
      }
    );
  }
);
