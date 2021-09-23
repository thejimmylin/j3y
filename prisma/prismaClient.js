// Use some tricks to prevent Next.js from creating too many `PrismaClient` instances in development due to hot reloading. To learn more:
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#solution
import { PrismaClient } from "@prisma/client";

let prismaClient;
if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient();
} else {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }
  prismaClient = global.prismaClient;
}

export default prismaClient;
