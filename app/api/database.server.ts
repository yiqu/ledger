import { PrismaClient } from '@prisma/client';

/**
 * @type PrismaClient
 */
let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient | undefined;
}

// This is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// In production, we'll have a single connection to the DB.
if (process.env.NODE_ENV === "production") {
  console.log("Prodction Created new DB connection");
  prisma = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient();
    console.log("DEV Created new DB connection for first time");
  }
  console.log("Assigning existing DB connection");
  prisma = global.__db__;
  prisma.$connect();
}

export { prisma };