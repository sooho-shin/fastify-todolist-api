import Fastify from "fastify";
// import router from "./routes/todo";
import autoLoad from "@fastify/autoload";
import path from "path";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(autoLoad, {
  dir: path.join(__dirname, "routes"),
});

fastify.register(cors, { origin: "*" });

// fastify.register(router);

/**
 * Run the server!
 */

const start = async () => {
  try {
    await fastify.listen({ port: 3031, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
